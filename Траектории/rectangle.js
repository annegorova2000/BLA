//для админа

ymaps.ready(['AnimatedLine']).then(init);
var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: [56.130703, 35.822918],
        zoom: 14
    }, {    
        searchControlProvider: 'yandex#search'
    });

    var myPolygon_1 = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [56.1343,35.8254],
            [56.1332,35.8254],
            [56.1332,35.8284],
            [56.1343,35.8284]
        ],
        // Координаты вершин внутреннего контура.
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Бесполетная зона 1"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00800090',
        // Ширина обводки.
        strokeWidth: 1,
        strokeOpacity: 0.1
    });
    console.log(myPolygon_1.geometry.get(2));
    
    var myPolygon_2 = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [56.1300,35.8317], 
            [56.1285,35.8317], 
            [56.1285,35.8328],
            [56.1300,35.8328]
        ],
        // Координаты вершин внутреннего контура.
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Бесполетная зона 2"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00800090',
        // Ширина обводки.
        strokeWidth: 1,
        strokeOpacity: 0.1
    });
    console.log(myPolygon_2.geometry.getCoordinates());

    // Добавляем многоугольник на карту.

    var t_A = new ymaps.Placemark([56.130442, 35.823156], {
        balloonContent: '<strong>Склад в библиотеке</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    });

    var t_B = new ymaps.Placemark([56.128625, 35.834102], {
        balloonContent: '<strong>Постамат 1, Магнит </strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

    var t_C = new ymaps.Placemark([56.135325, 35.830499], {
        balloonContent: '<strong>Постамат 2, Школа</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

    var  t_D = new ymaps.Placemark([56.128423, 35.820646], {
        balloonContent: '<strong>Постамат 3, Магазин</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

//соседнее село, большой радиус 
    var  t_E = new ymaps.Placemark([56.011474, 36.220441], {
        balloonContent: '<strong>Постамат 4, Школа в соседнем селе</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

//до постамата 1
    var lineStringGeometry_1 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.128625, 35.834102]
    ])
    var geoObject_1 = new ymaps.GeoObject({ geometry: lineStringGeometry_1 });
    myMap.geoObjects.add(geoObject_1);
    
    // Длина всей линии.
    //console.log('постамат 1', geoObject_1.geometry.getDistance());

//до постамата 2
    var lineStringGeometry_2 = new ymaps.geometry.LineString([
            // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.135325, 35.830499]
    ], {
        strokeColor: "#F0008",
        strokeWidth: 10,
        strokeOpacity: 0,
        strokeWidth: 1
    });
    var geoObject_2 = new ymaps.GeoObject({ geometry: lineStringGeometry_2 });
    myMap.geoObjects.add(geoObject_2);
    // Длина всей линии.
    //console.log('постамат 2', geoObject_2.geometry.getDistance());
    //console.log(geoObject_2.geometry.getLength());

//до постамата 3
    var lineStringGeometry_3 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.128423, 35.820646]
    ])
    var geoObject_3 = new ymaps.GeoObject({ geometry: lineStringGeometry_3 });
    myMap.geoObjects.add(geoObject_3);
    // Длина всей линии.
    dlina_3 = (geoObject_3.geometry.getDistance()+130)/1000;
    console.log('постамат 3', dlina_3);

    var myPolyline_3 = new ymaps.Polyline([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.128423, 35.820646]
    ], 
    {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        balloonContent: "Траектория маршрута в постамат 3"
    }, {// Цвет линии.
        strokeColor: "#000000",
        // Ширина линии.
        strokeWidth: 5,
        // Коэффициент прозрачности.
        strokeOpacity: 0.5
    });

// до постамата 4
    var lineStringGeometry_4 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.011474, 36.220441]
    ])
    var geoObject_4 = new ymaps.GeoObject({ geometry: lineStringGeometry_4 });
    myMap.geoObjects.add(geoObject_4);
    // Длина всей линии.
    dlina_4 = (geoObject_4.geometry.getDistance()+130)/1000;
    console.log('постамат 4', dlina_4);

    var myPolyline_4 = new ymaps.Polyline([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.011474, 36.220441]
    ], 
    {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        balloonContent: "Траектория маршрута в постамат 4"
    }, {// Цвет линии.
        strokeColor: "#000000",
        // Ширина линии.
        strokeWidth: 5,
        // Коэффициент прозрачности.
        strokeOpacity: 0.5
    });

    //создаем новые точки для бесполетной зоны 
    var new_t_A = new ymaps.Placemark([56.133929, 35.8284], {
        balloonContent: '<strong>Новая точка</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    });
    //myMap.geoObjects.add(new_t_A);

    var new_t_B = new ymaps.Placemark([56.1332, 35.82730], {
        balloonContent: '<strong>Новая точка 2</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    });
    //myMap.geoObjects.add(new_t_B);

    //до постамата 2 школа новый путь 
    var lineStringGeometry_5 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.1330647, 35.8271],
        [56.1330647,  35.8286568],
        [56.1341, 35.8286568],
        [56.135325, 35.830499]
    ])
    var geoObject_5 = new ymaps.GeoObject({ geometry: lineStringGeometry_5 });
    myMap.geoObjects.add(geoObject_5);
    // Длина всей линии.
    dlina_2 = (geoObject_5.geometry.getDistance()+130)/1000;
    console.log('траектория до постамата в школе', dlina_2);

    var myPolyline_1 = new ymaps.Polyline([
        //Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.1330647, 35.8271],
        [56.1330647,  35.8286568],
        [56.1341, 35.8286568],
        [56.135325, 35.830499]
    ], 
    {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        balloonContent: "Траектория маршрута в постамат 2"
    }, {// Цвет линии.
        strokeColor: "#000000",
        // Ширина линии.
        strokeWidth: 5,
        // Коэффициент прозрачности.
        strokeOpacity: 0.5
    });

    //новый путь до пастамата магнит
    var new_t_A_1 = new ymaps.Placemark([56.12902372, 35.8317], {
        balloonContent: '<strong>Новая точка</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    });
    //myMap.geoObjects.add(new_t_A_1);

    var new_t_A_2 = new ymaps.Placemark([56.12884, 35.8328], {
        balloonContent: '<strong>Новая точка</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    });
    //myMap.geoObjects.add(new_t_A_2);

    var lineStringGeometry_6 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.12904032, 35.8316],
        [56.1284,  35.8316],
        [56.1284, 35.8329],
        [56.128824, 35.8329],
        [56.128625, 35.834102]
    ])
    var geoObject_6 = new ymaps.GeoObject({ geometry: lineStringGeometry_6 });
    myMap.geoObjects.add(geoObject_6);
    dlina_1 = (geoObject_6.geometry.getDistance()+130)/1000;
    // Длина всей линии.
    console.log('траектория до постамата в магните', dlina_1);
    var myPolyline_2 = new ymaps.Polyline([
        //Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.12904032, 35.8316],
        [56.1284,  35.8316],
        [56.1284, 35.8329],
        [56.128824, 35.8329],
        [56.128625, 35.834102]
    ], 
    {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        balloonContent: "Траектория маршрута в постамат 1"
    }, {// Цвет линии.
        strokeColor: "#000000",
        // Ширина линии.
        strokeWidth: 5,
        // Коэффициент прозрачности.
        strokeOpacity: 0.5
    });

    //точки и отображение точек и зон
    myMap.geoObjects
        .add(myPolygon_1)
        .add(myPolygon_2)
        .add(myPolyline_1)
        .add(myPolyline_2)
        .add(myPolyline_3)
        .add(myPolyline_4)
        .add(t_A)
        .add(t_B)
        .add(t_C)
        .add(t_D)
        .add(t_E);

    //координаты от склада до постамата 4
    var mas = geoObject_2.geometry.getCoordinates()
    //console.log('f', mas[0][1])
    var k = (mas[0][1]-mas[1][1]) / (mas[0][0] - mas[1][0]) 
    var b = (mas[0][1] - ((mas[0][1]-mas[1][1]) / (mas[0][0] - mas[1][0])*mas[0][0]))
    //console.log('k', k)
    //console.log('b', b)
    var mas_1 = myPolygon_1.geometry.getCoordinates()
    var td_1 = 35.8271
    var td_2 = 56.1341
    var new_A_x = (td_1-b)/k
    var new_B_y = k*td_2 + b;
    console.log('new_A', new_A_x)
    console.log('new_B', new_B_y)
    var mas_2 = geoObject_1.geometry.getCoordinates()
    //console.log(mas_2)
    var k_2 = (mas_2[1][0]-mas_2[0][0]) / (mas_2[1][1] - mas_2[0][1]) 
    var  b_2 = (mas_2[1][0] - ((mas_2[1][0]-mas_2[0][0]) / (mas_2[1][1] - mas_2[0][1])*mas_2[1][1]))
    //console.log(k_2)
    //console.log(b_2)
    var mas_3 = myPolygon_2.geometry.getCoordinates()
    //console.log(mas_3)
    var tdt_1 = 35.8316
    var tdt_2 = 35.8329
    var new_t_x1 = k_2*tdt_1 + b_2
    var new_t_x2 = k_2*tdt_2 + b_2
    //console.log('x1', new_t_x1)
    //console.log('x', new_t_x2)
}

