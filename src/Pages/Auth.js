import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Client from './Client'


export default function Auth() {


    return (
        <>
            <button onClick={() => (<Client/>)}>КЛИЕНТ</button>
            
            <button>АДМИН</button>
        </>
    )
}
