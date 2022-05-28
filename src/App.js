import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HeaderClient from './Components/HeaderClient';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import {useState} from 'react'

import Shop from './Pages/Shop'
import FormOrder from './Pages/Basket'
import OrderStatus from './Pages/OrderStatus'
import Completed from './Pages/Completed'
import Info from './Pages/Info'
import NewOrders from './Pages/NewOrders'
import Progress from './Pages/Progress'
import Urvd from './Pages/Urvd'
import Auth from './Pages/Auth';
import { Button } from 'bootstrap';
import Shop2 from './Pages/Shop2';
import Basket from './Pages/Basket'


function App() {

  const [site, onChangeSite] = useState(false)
  const [cart, setCart] = useState([]);
  // const navigate = useNavigate()


  function setSite (setSite) {

      if (site) {
        return (
          <div>

                <Header site={site} setSite={onChangeSite}/>
                <button style={{width: 100, height: 30, background: "transparent", border: "none", fontSize: 0}} onClick={() => {
                  setSite(!site)
                  // navigate("/")
                }}>
                  СМЕНИТЬ ПРАВА ДОСТУПА</button>
                <Routes>
                    {/* <Route path="/" element={<NewOrders />} /> */}
                    <Route path="/progress" element={<Progress cart={cart}/>} />
                    <Route path="/completed" element={<Completed cart={cart} />} />
                    {/* <Route path="/info" element={<Info />} /> */}
                    <Route path="/urvd" element={<Urvd />} />
                </Routes>
          </div>
        )
      } else {
        return (
          <div>
                <HeaderClient site={site} setSite={onChangeSite}/>
                <button style={{width: 100, height: 30, background: "transparent", border: "none", fontSize: 0}} onClick={() => {
                  setSite(!site)
                  // navigate("/")
                }}>
                  СМЕНИТЬ ПРАВА ДОСТУПА</button>
                <Routes>
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/basket" element={<Basket/>} />
                    <Route path="/orderstatus" element={<OrderStatus/>} />
                    <Route path="/" element={<Shop2 cart={cart} setCart={setCart}/>} />
                </Routes>
          </div>
        )
      }
  }

  return (
    <>
      <Router>

        {setSite(onChangeSite)}

        </Router>
    </>
  );
}

export default App;
