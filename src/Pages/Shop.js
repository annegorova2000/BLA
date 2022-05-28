import React, { Component, useState} from 'react'
import { Container, Modal, Button, Card, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Book from '../Components/Book.png' 

export default function Shop() {
    return (
        <>  
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                    <Card>
                    <img
                            src={Book}
                            height="110"
                            width="110"
                            className="d-inline-block align-top"
                            alt="Book"
                            />
                        <Card.Body>
                        <Card.Title>Книга</Card.Title>
                        <Card.Text>
                            Описание книги
                        </Card.Text>
                        <Card.Title>100 рублей</Card.Title>
                        <Button variant="outline-success">КУПИТЬ</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
