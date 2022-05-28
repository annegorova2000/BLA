import React, { Component, useState } from 'react'
import { Container, Modal, Button, Col, Row, Form } from 'react-bootstrap'
import Book from '../Components/Book.png' 

const dataOrders = [
    {
        id: 1,
        timeStart: "12:00",
        timeEnd: "13:00",
        meals: [
            {
                id: 1,
                count: 1,
                name: "Книга",
                price: 1234,
            },
            {
                id: 2,
                count: 1,
                name: "Тетрадь",
                price: 1234,
            },
            {
                id: 3,
                count: 3,
                name: "Журнал",
                price: 1234,
            },
        ],

    },
    {
        id: 2,
        timeStart: "12:00",
        timeEnd: "13:00",
        meals: [
            {
                id: 1,
                count: 1,
                name: "Гуашь",
                price: 1234,
            },
            {
                id: 2,
                count: 1,
                name: "Кистошки",
                price: 1234,
            },
        ],

    },
    {
        id: 3,
        timeStart: "12:00",
        timeEnd: "13:00",
        meals: [
            {
                id: 1,
                count: 1,
                name: "Украшение",
                price: 1234,
            },
            {
                id: 2,
                count: 1,
                name: "Кольцо",
                price: 1234,
            },
            {
                id: 3,
                count: 1,
                name: "Колье",
                price: 1234,
            },
            {
                id: 4,
                count: 1,
                name: "Кольцо",
                price: 1234,
            },
            {
                id: 5,
                count: 1,
                name: "Кольцо",
                price: 1234,
            },
        ],
    },
]

function mealsInOrder(meals) {
    return meals.map( meal => {
        return (
            <p className="card-text text-start">{meal.name} {meal.price}</p>
        )
    })
}

function createOrder(ordersArr, handleShow) {
    return ordersArr.map(order => {
        return (
            <div className="card text-center bg-light mb-3 me-3" style={{"width": 500}}>
                <div className="card-body">
                    <h5 className="card-header bg-lih text-center">ЗАКАЗ {order.id} {order.timeStart}</h5>
                    {mealsInOrder(order.meals)}
                    <div class="d-grid gap-2 col-8 mx-auto">
                        <a href="#" className="btn btn-outline-success me-md-2">ОЦЕНКА УСПЕШНОСТИ ДОСТАВКИ</a>
                        <button href="#" onClick={handleShow} className="btn btn-outline-success me-md-2">ОТПРАВИТЬ НА ПРОВЕРКУ ОРВД</button> 
                    </div>
                </div>
            </div>
        )
    })
}

export default function NewOrders() {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Container className='mt-5' style={{"min-height": "100vh"}}>
                <div className="d-flex form-control flex-wrap">
                    {createOrder(dataOrders, handleShow)}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>ФОРМА ПРОВЕРКИ ОРВД</Modal.Title>
                    </Modal.Header>


                        <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Организация</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Выберете постамат</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Выберете постамат</option>
                                <option>Постамат 1</option>
                                <option>Постамат 2</option>
                                <option>Постамат 3</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <img
                                src={Book}
                                height="110"
                                width="110"
                                className="d-inline-block align-top"
                                alt="Book"
                                />


                        </Form>


                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
}
