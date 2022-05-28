import React, { Component} from 'react'
import { Container, Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './Logo.png'

import Shop from '../Pages/Shop'
import Basket from '../Pages/Basket'
import OrderStatus from '../Pages/OrderStatus'

export default function HeaderClient () {
        return (
            <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="90"
                            width="90"
                            className="d-inline-block align-top"
                            alt="Logo"
                            />
                        <div class="navbar-header">
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            {/* <Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/shop" > МАГАЗИН </Link> */}
                            <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/" > МАГАЗИН </Link></Nav.Link>
                            {/* <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/basket" > КОРЗИНА </Link></Nav.Link> */}
                            <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/orderstatus" > СТАТУС ЗАКАЗА </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
    
}