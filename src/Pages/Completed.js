import React, { Component, useState } from 'react'
import { Container, Table, ListGroup} from 'react-bootstrap'



export default function Completed({cart}) {
    
    console.log(cart)


    const cartItems = cart.map((el, i) => (
            <tr key={el.id+i}>
                <td>Номер заказа</td>
                <td>{el.id}</td>
                <td>фио</td>
                <td>телефон</td>
                <td>{el.price}</td>
                <td>{el.name}</td>
                <td>номер постамата</td>
            </tr>
    ));


    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Номер заказа</th>
                <th>Id заказа</th>
                <th>ФИО покупателя</th>
                <th>Номер телефона</th>
                <th>Стоимость заказа</th>
                <th>Заказ</th>
                <th>Постамат</th>
                </tr>
            </thead>
            <tbody>
                {cartItems}      
            </tbody>
            </Table>
        </div>
    )
}