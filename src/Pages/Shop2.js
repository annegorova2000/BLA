import React, { Component, useState, useEffect } from "react";
import { Container, Modal, Button, Card, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Book from '../Components/Book.png' 
import { YMaps, Map, Placemark } from 'react-yandex-maps';



const mapState = { center: [55.76, 37.64], zoom: 10 };


const Shop2 = ({cart, setCart}) => {
  // const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const deliveryPrice=1052.24

  const items = [
    {
      id: 1,
      name: "Руслан и Людмила",
      discription: "Поэма",
      price: 250,
    },
    {
      id: 2,
      name: "Сказка о попе и его работнике Балде",
      discription: "Сказка",
      price: 200,
    },
    {
      id: 3,
      name: "Сказка о царе Салтане, о сыне его могучем Гвидоне",
      discription: "Сказка",
      price: 200,
    },
    {
      id: 4,
      name: "Сказка о рыбаке и рыбке",
      discription: "Сказка",
      price: 200,
    },
    {
      id: 5,
      name: "Сказка о мертвой царевне и о семи богатырях",
      discription: "Сказка",
      price: 200,
    },
    {
      id: 6,
      name: "Сказка о золотом петушке",
      discription: "Сказка",
      price: 200,
    },
    {
      id: 7,
      name: "Роман в стихах",
      discription: "Роман в стихах",
      price: 550,
    },
    {
      id: 8,
      name: "Капитанская дочка",
      discription: "Повесть",
      price: 350,
    },
    {
      id: 9,
      name: "Маленькие трагедии",
      discription: "Цикл пьес",
      price: 250,
    },
    {
      id: 10,
      name: "Повести Белкина",
      discription: "Цикл повестей",
      price: 400,
    },
    {
      id: 11,
      name: "Как сесть на шпагат за 1 час",
      discription: "Тренинги",
      price: 1000,
    },
    {
      id: 12,
      name: "Как я победила JavaScript",
      discription: "Фантастика",
      price: 1000,
    },
    {
      id: 13,
      name: "Will hold eou like a Python",
      discription: "Ужасы",
      price: 1000,
    },
    {
      id: 14,
      name: "Women Learning ожидания и реальность",
      discription: "Научная литература",
      price: 1000,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      <Card>
      <img
              src={Book}
              height="110"
              width="110"
              className="d-inline-block align-top"
              alt="Book"
              />
          <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.discription}</Card.Text>
          <Card.Title>{el.price} руб</Card.Title>
          <Button onClick={() => addToCart(el)} variant="outline-success">КУПИТЬ</Button>
          </Card.Body>
      </Card>
    </div>
  ));

  const cartItems = cart.map((el, i) => (
    <div key={el.id+i}>
      <ListGroup horizontal>
      <ListGroup.Item>{el.id}</ListGroup.Item>
        <ListGroup.Item>
        <img
                src={Book}
                height="60"
                width="60"
                className="d-inline-block align-top"
                alt="Book"
                />
        </ListGroup.Item>
        <ListGroup.Item>{el.name}</ListGroup.Item>
          {/* <Card.Text>{el.discription}</Card.Text> */}
          <ListGroup.Item>{el.price} руб</ListGroup.Item>
          <Button onClick={() => removeFromCart(el)} variant="outline-success">Удалить</Button>        
      </ListGroup>
      
      {/* {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} /> */}
    </div>
  ));

  const cartItems2 = cart.map((el, i) => (
    <div key={el.id+i}>
      <ListGroup horizontal>
        {/* <ListGroup.Item>
        <img
                src={Book}
                height="60"
                width="60"
                className="d-inline-block align-top"
                alt="Book"
                />
        </ListGroup.Item> */}
        <ListGroup.Item>{el.id}</ListGroup.Item>
        <ListGroup.Item>{el.name}</ListGroup.Item>
          {/* <Card.Text>{el.discription}</Card.Text> */}
          <ListGroup.Item>{el.price} руб</ListGroup.Item>
      </ListGroup>
      
      {/* {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} /> */}
    </div>
  ));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  const [org, setOrg] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [city, setCity] = useState("")
  const [post, setPost] = useState("")
  const [place, setPlace] = useState("")


  let data = {}
  const onSubmit = async (e) => {

    if (e !== undefined) {
      e.preventDefault();
    }
    let onlyID
    onlyID = cart.map(e => e.id)
    data = {
      phone: duration,
      post: post,
      idOrder: onlyID
    }

    console.log(data)

    const url = '/test/';
    console.log(data)
    
    
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    let result = await response.json();
    // alert(result.message);
    

    console.log(result)
    handleClose();
  };



  // function ymapsFunction() {
  //     YMaps = window.YMaps;
    
  
  //     YMaps.ready(init);
  //     var my_Map, myRectangle, myRectangle_2;
      
  //     function init () {
  //         my_Map = new YMaps.Map('map', {
  //             center: [56.0768,35.9924],
  //             zoom: 11
  //         }, {
  //             searchControlProvider: 'yandex#search'
  //         });
      
  //         var t_A = new YMaps.Placemark([56.130442, 35.823156], {
  //             balloonContent: '<strong>Склад в библиотеке</strong>'
  //         }, {
  //             preset: 'islands#icon',
  //             iconColor: '#0095b6'
  //         });
      
  //         var t_B = new YMaps.Placemark([56.128625, 35.834102], {
  //             balloonContent: '<strong>Постамат 1, Магнит </strong>'
  //         }, {
  //             preset: 'islands#icon',
  //             iconColor: '#FF1493'
  //         });
      
  //         var t_C = new YMaps.Placemark([56.135325, 35.830499], {
  //             balloonContent: '<strong>Постамат 2, Школа</strong>'
  //         }, {
  //             preset: 'islands#icon',
  //             iconColor: '#FF1493'
  //         });
      
  //         var  t_D = new YMaps.Placemark([56.128423, 35.820646], {
  //             balloonContent: '<strong>Постамат 3, Алкомаркет</strong>'
  //         }, {
  //             preset: 'islands#icon',
  //             iconColor: '#FF1493'
  //         });
      
  //         //соседнее село, большой радиус 
  //         var  t_E = new YMaps.Placemark([56.011474, 36.220441], {
  //             balloonContent: '<strong>Постамат 4 школа соседнее село</strong>'
  //         }, {
  //             preset: 'islands#icon',
  //             iconColor: '#FF1493'
  //         });
          
  //         my_Map.geoObjects
  //             .add(t_A)
  //             .add(t_B)
  //             .add(t_C)
  //             .add(t_D)
  //             .add(t_E);
  //     }
    
  // }

  return (
    <div>
    <Modal.Title className="text-center">КАТАЛОГ КНИГ</Modal.Title>
      <div>{listItems}</div>
      <Modal.Title className="text-center">КОРЗИНА</Modal.Title>
      <div>{cartItems}</div>
      <p>СТОИМОСТЬ ЗАКАЗА: {cartTotal} руб</p>
      <Button variant="success" onClick={handleShow}>ОФОРМИТЬ ЗАКАЗ</Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>ОФОРМЛЕНИЕ ЗАКАЗА</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cartItems}
            <p>СТОИМОСТЬ ЗАКАЗА: {cartTotal} руб</p>

            <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Введите ФИО:</Form.Label>
                <Form.Control onChange={(e) => setOrg(e.target.value)} type="name" placeholder="Введите название организации" />
                </Form.Group>
            </Row>
            </Form>

            <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Введите телефон</Form.Label>
                <Form.Control onChange={(e) => setDuration(e.target.value)} type="name" placeholder="Введите название организации" />
                </Form.Group>
            </Row>
            </Form>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Выберете город</Form.Label>
            <Form.Select onChange={(e) => setCity(e.target.value)} defaultValue="Choose...">
                <option>Выберете постамат</option>
                <option>Москва</option>
                <option>Ярополец</option>
                <option>Соседнее село</option>
                <option>Санкт-Петербург</option>
                <option>Самара</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Выберете постамат</Form.Label>
            <Form.Select onChange={(e) => setPost(e.target.value)} defaultValue="Choose...">
                <option>Выберете постамат</option>
                <option>Постамат 1</option>
                <option>Постамат 2</option>
                <option>Постамат 3</option>
            </Form.Select>
            </Form.Group>

            
            {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Выберете склад</Form.Label>
            <Form.Select onChange={(e) => setPlace(e.target.value)} defaultValue="Choose...">
                <option>Выберете </option>
                <option>Склад 1</option>
            </Form.Select>
            </Form.Group> */}


<a href="https://yandex.ru/maps/?um=constructor%3A6d9be1427f7e4b3db3a018133094e224125c2841679477b88627a4dbc7db8f0d&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A6d9be1427f7e4b3db3a018133094e224125c2841679477b88627a4dbc7db8f0d&amp;width=450&amp;height=400&amp;lang=ru_RU" alt="" style={{border: 0}} /></a>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Отмена
            </Button>
            {/* <Button onClick={onSubmit} variant="primary">РАСЧИТАТЬ СТОИМОСТЬ ДОСТАВКИ</Button> */}
            
            <Button variant="primary" onClick={handleShow3}>Продолжить оформление заказа</Button>
            <Modal show={show3} onHide={handleClose3} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title >ОФОРМЛЕНИЕ ЗАКАЗА</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <p className="text-center">ВАШ ЗАКАЗ: {cartItems2} </p>
              <p className="text-center">ВАШИ ДАННЫЕ:</p>
              <p>СТОИМОСТЬ ЗАКАЗА: {cartTotal} руб</p>
              <p>СТОИМОСТЬ ДОСТАВКИ: {deliveryPrice} руб</p>
              <p>ИТОГО К ОПЛАТЕ: {cartTotal + deliveryPrice}  руб</p>
              <p>ФИО: {org}</p>
              <p>Номер телефона: {duration}</p>
              <p>Город: {city}</p>
              <p>Постамат: {post}</p>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                  Закрыть
                </Button>
                {/* <Button href="#" onClick={() => { onSubmit(); handleClose3();}} variant="primary" > */}
                <Button href="#" onClick={() => { onSubmit(); handleClose3(); handleClose()}} variant="primary" >

                  Подтвердить заказ
                </Button>
              </Modal.Footer>
            </Modal>          
                             
          </Modal.Footer>
        </Modal>   


      </div>
  );
};

export default Shop2;