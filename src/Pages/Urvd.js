// import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'

// const dataOrders = [
//     {
//         id: 1,
//         timeStart: "12:00",
//         timeEnd: "13:00",
//         meals: [
//             {
//                 id: 1,
//                 count: 1,
//                 name: "Книга",
//                 price: 1234,
//             },
//             {
//                 id: 2,
//                 count: 1,
//                 name: "Тетрадь",
//                 price: 1234,
//             },
//             {
//                 id: 3,
//                 count: 3,
//                 name: "Журнал",
//                 price: 1234,
//             },
//         ],

//     },
//     {
//         id: 2,
//         timeStart: "12:00",
//         timeEnd: "13:00",
//         meals: [
//             {
//                 id: 1,
//                 count: 1,
//                 name: "Гуашь",
//                 price: 1234,
//             },
//             {
//                 id: 2,
//                 count: 1,
//                 name: "Кистошки",
//                 price: 1234,
//             },
//         ],

//     },
//     {
//         id: 3,
//         timeStart: "12:00",
//         timeEnd: "13:00",
//         meals: [
//             {
//                 id: 1,
//                 count: 1,
//                 name: "Украшение",
//                 price: 1234,
//             },
//             {
//                 id: 2,
//                 count: 1,
//                 name: "Кольцо",
//                 price: 1234,
//             },
//             {
//                 id: 3,
//                 count: 1,
//                 name: "Колье",
//                 price: 1234,
//             },
//             {
//                 id: 4,
//                 count: 1,
//                 name: "Кольцо",
//                 price: 1234,
//             },
//             {
//                 id: 5,
//                 count: 1,
//                 name: "Кольцо",
//                 price: 1234,
//             },
//         ],
//     },
// ]

// function mealsInOrder(meals) {
//     return meals.map( meal => {
//         return (
//             <p className="card-text text-start">{meal.name} {meal.price}</p>
//         )
//     })
// }

// function createOrder(ordersArr) {
//     return ordersArr.map(order => {
//         return (
//             <div className="card text-center bg-light mb-3 me-3" style={{"width": 500}}>
//                         <div className="card-body">
//                             <h5 className="card-header bg-lih text-center"> ЗАЯВКА {order.id} {order.timeStart}</h5>
//                             {mealsInOrder(order.meals)}                            
//                             <a href="#" className="btn btn-outline-success me-md-4">ОТПРАВИТЬ</a>
//                         </div>
//             </div>
//         )
//     })
// }

// export default class NewOrders extends Component {
//     render() {
//         return (
//             <Container className='mt-5' style={{"min-height": "100vh"}}>
//                 <div className="d-flex form-control flex-wrap">
//                     {createOrder(dataOrders)}
//                 </div>
//             </Container>
//         )
//     }
// }


import React, { Component } from 'react'
import { Container, Modal, Button, Card, Col, Row} from 'react-bootstrap'



const styles = {
     
    orders: {
      width: 426,
      height: 600,
      marginLeft: 20,
    //   backgroundColor: "#999"
    },
}

export default function Orvd() {

    return (
        <div>

        <div style={styles.orders}>
                <Card.Title className='text-center'>ЗАКАЗЫ</Card.Title>
                {/* <Modal.Body>{cartItems}</Modal.Body> */}
                <Row xs={1} className="g-4">
                    {Array.from({ length: 1}).map((_, idx) => (
                    <Col>
                        <Card >
                        <Card.Body>
                            <Card.Title className='text-center'>ЗАКАЗ №101101 28.06.22</Card.Title>
                            <Card.Text className='text-center'>
                                Полет разрешен
                            </Card.Text>
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
                    ))}
                    </Row>
                </div>

        </div>
    )
}