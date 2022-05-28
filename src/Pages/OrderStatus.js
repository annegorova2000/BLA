
// import { Container, Modal, Button, Col, Row, Form } from 'react-bootstrap'




// import React from "react";
// import ReactDOM from "react-dom";
// import { Card } from "antd";
// import "antd/dist/antd.css";
// import "../index.css";

// export default function OrderStatus() {

//   const App = () => {
//   const [cartProducts, setCartProducts] = React.useState([]);
//   const [products, setProducts] = React.useState(getProducts());

//   const handleAddProductToCart = productID => {
//     setCartProducts([...cartProducts, productID]);
//   };
//   const handleRemoveFromCart = productID => {
//     const newCartProducts = cartProducts.filter(id => id !== productID);
//     setCartProducts(newCartProducts);
//   };
//   return (
//     <>
//       <div>
//         <h1>Выберите товар</h1>
//         {products.map(product => {
//           const { id, name, price, photo } = product;
//           let haveInCart = false;

//           cartProducts.forEach(productID => {
//             if (productID === id) {
//               haveInCart = true;
//             }
//           });

//           return (
//             <Card title={name} key={id}>
//               <p>{price}</p>
//               <p>{photo}</p>
//               {!haveInCart ? (
//                 <Button
//                   onClick={() => handleAddProductToCart(id)}
//                   type="primary"
//                 >
//                   Добавить в корзину
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={() => handleRemoveFromCart(id)}
//                   type="primary"
//                   danger
//                 >
//                   Удалить из корзины
//                 </Button>
//               )}
//             </Card>
//           );
//         })}
//       </div>
//       <div>
//         <h1>Ваша корзина</h1>
//         {cartProducts.length > 0
//           ? cartProducts.map(productID => {
//               const productIndex = products.findIndex(product => {
//                 return product.id === productID;
//               });
//               let { name, id, price, photo } = products[productIndex];
//               return (
//                 <Card title={name} key={id}>
//                   <p>{price}</p>
//                   <p>{photo}</p>
//                 </Card>
//               );
//             })
//           : "Ваша корзина пуста! :("}
//       </div>
//     </>
//   );
//   };

// }

// const getProducts = () => [
//   {
//     id: 1.1,
//     name: "Title1",
//     price: "10$",
//     photo: "img1"
//   },
//   {
//     id: 1.2,
//     name: "Title2",
//     price: "20$",
//     photo: "img2"
//   },
//   {
//     id: 1.3,
//     name: "Title3",
//     price: "30$",
//     photo: "img3"
//   },
//   {
//     id: 1.4,
//     name: "Title4",
//     price: "25$",
//     photo: "img4"
//   }
// ];

// ReactDOM.render(<App />, document.getElementById("container"));

import React, { Component, useState} from 'react'
import { Container, Nav, Navbar, FormControl, Card, Row, Col, Form, Button, ListGroup} from 'react-bootstrap'

const styles = {
     
    orders: {
      width: 426,
      height: 600,
      marginLeft: 220,
    //   backgroundColor: "#999"
    },
}

export default function OrderStatus() {

    const [cart, setCart] = useState([]);

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

    return (
        
        <div>
            <div style={styles.orders}>
            <ListGroup>
            <ListGroup.Item className='text-center'>ИНФОРМАЦИЯ О ЗАКАЗАХ</ListGroup.Item>
            <ListGroup.Item variant="success">Заказ
            
                <Row xs={1} className="g-4">
                <Col>
                        <Card >
                        <Card.Body>
                            <Card.Title className='text-center'>ЗАКАЗ №101101 28.06.22</Card.Title>
                            <p className="text-center">ВАШ ЗАКАЗ: {cartItems2} </p>
                            <Card.Text>
                                Дата: 28.06.22
                            </Card.Text>
                            <Card.Text>
                                Время вылета: 17:00
                            </Card.Text>
                            <Card.Text>
                                Длительность полета: 17:00
                            </Card.Text>
                        </Card.Body>
                        </Card>
                       
                    </Col>
                </Row>            
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">Заказ получен</ListGroup.Item>
            <ListGroup.Item variant="secondary">Заказ получен</ListGroup.Item>
            </ListGroup>
        </div>
        </div>
    )
}