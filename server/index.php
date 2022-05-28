<?php
$count = 0;
if (count($_REQUEST)>0){
    $count = count($_REQUEST);
}
file_put_contents('log.txt',"\n",FILE_APPEND);
$now = date_create('now')->format('Y-m-d H:i:s');
file_put_contents('log.txt',$now,FILE_APPEND);
file_put_contents('log.txt',"start",FILE_APPEND);
$a = file_get_contents('php://input');


$text = "";
$arr_a = json_decode($a,true);
$flag_error = false;
$arr_error = [];
// проверяем есть ли корзина
if (array_key_exists('idOrder',$arr_a)){
    // получить номер телефона
    $tel = $arr_a['phone'];
    $dbc = mysqli_connect("localhost","u6497205_club","Club1285ab","u6497205_club");
    mysqli_set_charset($dbc,"utf8mb4");
    $tel = mysqli_real_escape_string($dbc, trim($tel));
    $query = "SELECT id_client FROM client WHERE phone_number = '$tel'";
    $result = mysqli_query($dbc,$query);
    
    if (mysqli_num_rows($result)>0){
        $row= mysqli_fetch_array($result);
        $id_client = $row[0];
    } else {
        $flag_error = true;
        array_push($arr_error,'У нас нет клиента с таким телефоном');
    }


    // получить постамат 
    $post = $arr_a['post'];
    if ($post != ''){
        $query = "SELECT id_postamat,path_length FROM postamat WHERE name_postamat = '$post'";
        $result = mysqli_query($dbc,$query);
        if (mysqli_num_rows($result) == 0){
            $id_post = 'пусто';
        }
        else {
            $row = mysqli_fetch_array($result);
            $id_post = $row[0];
            $path_length = (string)$row[1];
        }

        //$text = $text."постамат  $id_post ";
        //$text = $text."\n";

    } else {
        $flag_error = true;
        array_push($arr_error,'нужно выбрать постамат');
    }

    if (count($arr_a['idOrder']) ==0 ){
        $flag_error = true;
        array_push($arr_error,'в заказе нет книг');
    }

    if (!$flag_error){
        // записать заказ в БД
        $cart = $arr_a['idOrder'];
        //foreach($cart as )

        $query = "INSERT INTO flight_history (id_client, id_postamat) VALUES ($id_client, $id_post)"; 
        //$text = $text."запрос  $query \n";
        mysqli_query($dbc,$query);
        $order = mysqli_insert_id($dbc);
        //$order = 1;
        $arr_insert = [];
        foreach($cart AS $value){
            array_push($arr_insert,"($order,$value)");
        }

        $insert_into =  implode(',',$arr_insert);
        $query = "INSERT INTO zak_cl (id_order, id_book) VALUES $insert_into";
        mysqli_query($dbc,$query);
        // получить массу и вес книг
        $books = implode(',',$cart);
        $query = "SELECT SUM(Book_Mass),SUM(Book_Cost) FROM Books WHERE ID_Book IN ($books )";
        $result = mysqli_query($dbc,$query);
        $row = mysqli_fetch_array($result,MYSQLI_NUM);
        $data_book = implode(',',$row);

        // получить данные коптера
        if ($id_post<4){
            $uav = 1;
        } else {
            $uav = 2;
        }
        $query = "SELECT ID_UAV, Mass,Horizontal_Speed,Vertical_Speed,El_Capacity,En_Capacity,UAV_Cost,UAV_Resource,Battery_Cost,Discharge_Cicles 
        FROM UAV WHERE ID_UAV = $uav";
        $result = mysqli_query($dbc,$query);
        $row = mysqli_fetch_array($result,MYSQLI_NUM);
        $data_UAV = implode(',',$row);
        /*file_put_contents('log.txt',"\n",FILE_APPEND);
        file_put_contents('log.txt',$data_UAV ,FILE_APPEND);

        $to_python = "$data_UAV:$data_book:$path_length";
        file_put_contents('log.txt',"\n",FILE_APPEND);
        file_put_contents('log.txt',$to_python ,FILE_APPEND);
        $to_python = (string)$to_python;*/
        // ветер
        $city = "Yaropolets";
        $rep1 = "http://api.openweathermap.org/data/2.5/find?q=";
        $rep2 = "&type=like&APPID=";
        $API_KEY = "c447ed04400ffcd9ea1d7b43d62f251e";
        $rep0 = $rep1.$city.$rep2.$API_KEY;
        $page = file_get_contents($rep0);
        $res = json_decode($page,true);
        $list = $res['list'];
        $list0 = $list[0];
        $wind = $list0['wind'];
        $speed = $wind['speed'];

        $py = exec("python ".__DIR__."/m.py $data_UAV $data_book $path_length $speed",$output, $retval);
        $arr_return = [];
        if (!$py){
            $text = 'питон ошибка';
        } else {
            $text = 'питон good';
            $o = 0;
            foreach($output as $value){
                file_put_contents('log.txt',"\n",FILE_APPEND);
                file_put_contents('log.txt'," $o ",FILE_APPEND);
                file_put_contents('log.txt',$value,FILE_APPEND);
                $o = $o+1;
            }
            if($output[0]=='code_adm:1'){
                array_push($arr_return,'The UAV is able to do it!');
            } else {
                array_push($arr_return,'The UAV delivery is not available :(');
            }
            array_push($arr_return,$output[1]);
            array_push($arr_return,$output[2]);
        }
        file_put_contents('log.txt',"\n",FILE_APPEND);
        file_put_contents('log.txt',$text,FILE_APPEND);
    } 

    


}

if ($flag_error) {
    $to_set = json_encode(['error',$arr_error],true);    
} else {
    $to_set = json_encode(['good',$arr_return],true);
}


echo $to_set;
exit;