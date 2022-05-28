import React, { Component} from 'react'
import { Container, Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './Logo.png'

import Completed from '../Pages/Completed'
import Info from './../Pages/Info'
import NewOrders from './../Pages/NewOrders'
import Progress from './../Pages/Progress'
import Urvd from './../Pages/Urvd'

export default function Header() {
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
                        < Nav className="me-auto">
                            {/* <Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/" > АКТУАЛЬНЫЕ ЗАКАЗЫ </Link> */}
                            <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/progress" > ЗАКАЗЫ </Link></Nav.Link>
                            {/* <Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/info" > ИНФОРМАЦИЯ О ДРОНАХ </Link> */}
                            <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/urvd" > ПРОВЕРЕНО ОРВД </Link></Nav.Link>
                            <Nav.Link><Link style={{textDecoration: "none", color: "#8a7f8e"}} to="/completed" > ЗАВЕРШЕННЫЕ ЗАКАЗЫ </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
        )
    
}