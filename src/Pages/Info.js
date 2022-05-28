import React, { Component, useState} from 'react'
import { Container, Modal, Button, Card, Row, Col, Table } from 'react-bootstrap'

export default function Auth() {
    return (
        <>  
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Серийный номер</th>
                    <th>Наименование дрона</th>
                    <th>Характеристики</th>
                    <th>Статус</th>
                    <th>Заряд аккумулятора</th>
                    <th>Кнопка отправки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>102102</td>
                        <td>Дрон Аня</td>
                        <td>Супер пупер</td>
                        <td>Зарряжен</td>
                        <td>100%</td>
                        <Button variant="outline-success">ОТПРАВИТЬ</Button>
                    </tr>
                    <tr>
                        <td>202202</td>
                        <td>Дрон Лиза</td>
                        <td>Мега супер пупер</td>
                        <td>Выполняет заказ</td>
                        <td>85%</td>
                        <Button variant="outline-success">ОТПРАВИТЬ</Button>
                    </tr>
                    <tr>
                        <td>303303</td>
                        <td>Дрон Даша</td>
                        <td>Очень классный</td>
                        <td>Идет заряд...</td>
                        <td>4%</td>
                        <Button variant="outline-success">ОТПРАВИТЬ</Button>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
