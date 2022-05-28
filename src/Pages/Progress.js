import React, { Component, useState} from 'react'
import { Container, Modal, Button, Card, Row, Col, Nav, Table, Form, ListGroup } from 'react-bootstrap'
import { YMaps, Map } from 'react-yandex-maps';
import Maps from '../Components/Maps.jpg' 
import MapGif from '../Components/MapGif.gif'
import Book from '../Components/Book.png' 



const mapState = { center: [55.76, 37.64], zoom: 10 };


const styles = {
  progress: {
  
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  quad: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  orders: {
    width: 426,
    height: 600,
    backgroundColor: "#999"

  },
  map: {
    width: 572,
    height: 600,
    backgroundColor: "#aeaeae"
  },
  tableQuad: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "auto",
    width: 1442,
    height: 206,
  }
}

function getRandomInt(min, max) {
  return Math.random()*(max - min) + min;
}



export default function MapBasics({cart}) {

  console.log(cart)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
    console.log(document.querySelector("#scoreFly"))
      //  document.querySelector("#scoreFly").value = "gghbdtn"
  }


  const [org, setOrg] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [city, setCity] = useState("")
  const [post, setPost] = useState("")
  const [place, setPlace] = useState("")

  
  let data = {}
  const onSubmit = async (e) => {
    e.preventDefault();
    data = {
      org: org,
      date: date,
      time: time,
      duration: duration,
      city: city,
      post: post,
      place: place
    }

    const url = '/test/';
    
    console.log(data)
    
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    let result = await response.json();
    // alert(result.message);
    
    handleClose();
    
  };
  
  
  const onSubmit2 = async (e) => {
    e.preventDefault();
    handleClose2();
  };



  async function getData() {

    const url = '/test/';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log("Полученный ответ от сервера", result)
        return result
      });
    
  }

  const cartItems = cart.map((el, i) => (
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


    return (
      <div style={styles.progress}>
        <div style={styles.row}>
        <div style={styles.orders}>
        <Card.Title >ЗАКАЗЫ</Card.Title>
        {/* <Modal.Body>{cartItems}</Modal.Body> */}
           <Row xs={1} className="g-4">
            {Array.from({ length: 1}).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title className='text-center'>ЗАКАЗ №101101 21.06.21</Card.Title>
                    <Card.Text>
                    {cartItems}
                    </Card.Text>
                    <div class="d-grid gap-2 col-8 mx-auto">
                        <a href="#" onClick={handleShow2} className="btn btn-outline-success me-md-2">ОЦЕНКА УСПЕШНОСТИ ДОСТАВКИ</a>
                        <button href="#" onClick={handleShow} className="btn btn-outline-success me-md-2">ОТПРАВИТЬ НА ПРОВЕРКУ ОРВД</button> 
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className='text-center'>ЗАКАЗ №</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className='text-center'>ЗАКАЗ №</Card.Title>
                  </Card.Body>
                </Card>
                {/* {ymapsFunction()} */}
              </Col>
            ))}
            </Row>
         </div>
         <div style={styles.map}>
         <Card.Title >КАРТА</Card.Title>
         <img
                                src={Maps}
                                height="470"
                                width="572"
                                className="d-inline-block align-top"
                                alt="Maps"
                                />
           </div>
        </div>
        <div style={styles.tableQuad}>
        <Card.Title >СПИСОК ДОСТУПНЫХ БВС:</Card.Title>
                <>  
                  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Id БВС</th>
                            <th>Грузоподъемность</th>
                            <th>Дальность полета</th>
                            <th>Статус</th>
                            <th>Заряд аккумулятора</th>
                            <th>Кнопка отправки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>9 кг</td>
                                <td>16.5 км</td>
                                <td>Зарряжен</td>
                                <td>100%</td>
                                <Button variant="outline-success">ОТПРАВИТЬ</Button>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>13.3 кг</td>
                                <td>40 км</td>
                                <td>Выполняет заказ</td>
                                <td>85%</td>
                                <Button variant="outline-success">ОТПРАВИТЬ</Button>
                            </tr>
                        </tbody>
                    </Table>
                </>
           </div>



            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                    <Modal.Title>ФОРМА СОГЛАСОВАНИЯ ЗАЯВКИ ОРВД</Modal.Title>
                    </Modal.Header>

                        <Form onSubmit={onSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Согласование</Form.Label>
                            <Form.Label>Письмо от Администрации населенного пункта о согласии на выполнение полетов над территорией населенного пункта. Письмо от Владельца территории о согласии на выполнение полетов над территорией</Form.Label>
                            <Form.Control onChange={(e) => setOrg(e.target.value)} type="name" placeholder="Прикрепить файл" />
                            </Form.Group>
                        </Row>
                        
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Представление</Form.Label>
                            <Form.Label>Представление на установление местного режима отправляется по электронной почте на адрес ЗЦ ЕС ОрВД не позднее 3х суток до вылета</Form.Label>
                            <Form.Control onChange={(e) => setDate(e.target.value)} placeholder="Прикрепить файл" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Полетный план</Form.Label>
                            <Form.Label>Отправляется по электронной почте на адрес ЗЦ ЕС ОрВД не позднее вечера дня перед вылетом.</Form.Label>
                            <Form.Control onChange={(e) => setDuration(e.target.value)} placeholder="Прикрепить файл" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Разрешение на взлет</Form.Label>
                            <Form.Label>Запрос разрешения на взлет у диспетчера ЗЦ ЕС ОрВД по телефону 89665006678</Form.Label>
                            <Form.Control onChange={(e) => setTime(e.target.value)} placeholder="Введите номер запроса" />
                        </Form.Group>

                       
                        <Form.Label>Маршрут полета:</Form.Label>
                        <img
                                src={Maps}
                                height="400"
                                width="490"
                                className="d-inline-block align-top"
                                alt="Maps"
                                />
                        </Form>


                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Отправить
                    </Button>
                    </Modal.Footer>
          </Modal>

          <Modal show={showModal2} onHide={handleClose2} animation={false}>
            <Modal.Header closeButton>
                    <Modal.Title>ОЦЕНКА УСПЕШНОСТИ ДОСТАВКИ</Modal.Title>
                    </Modal.Header>

                        <Form onSubmit={onSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Оценка возможности полета:</Form.Label>
                            <p className="text-center">ПОЛЕТ ВОЗМОЖЕН</p>
                            {/* <p id="scoreFly" type="name" placeholder="Полет возможен" >{getData().toString()}</p> */}
                            </Form.Group>
                        </Row>

                        
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Оценка успешности полета:</Form.Label>
                            {/* <p className="text-center">94%</p> */}
                            <p className="text-center">{getRandomInt(75, 98)} %</p>
                        </Form.Group>
                        
                        <Form.Label>Маршрут полета:</Form.Label>
                        <img
                                src={MapGif}
                                height="370"
                                width="490"
                                className="d-inline-block align-top"
                                alt="MapGif"
                                />
                        </Form>


                    <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={onSubmit2}>
                        ОK
                    </Button>
                    </Modal.Footer>
          </Modal>

      </div>
    );
  }



// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }








// <div style={styles.progress}> 
//       <div style={styles.orders}></div>
        //  <div style={styles.orders}>
        //    <Row xs={1} className="g-4">
        //     {Array.from({ length: 1}).map((_, idx) => (
        //       <Col>
        //         <Card>
        //           <Card.Body>
        //             <Card.Title>ЗАКАЗ №101101 21.06.21</Card.Title>
        //             <Card.Text>
        //               1. Книга #737322
        //             </Card.Text>
        //             <Card.Text>
        //               2. Книга #273927
        //             </Card.Text>
        //           </Card.Body>
        //         </Card>
        //         <Card>
        //           <Card.Body>
        //             <Card.Title>ЗАКАЗ №102028 22.06.21</Card.Title>
        //             <Card.Text>
        //               1. Книга #783863
        //             </Card.Text>
        //             <Card.Text>
        //               2. Книга #000876
        //             </Card.Text>
        //           </Card.Body>
        //         </Card>
        //         <Card>
        //           <Card.Body>
        //             <Card.Title>ЗАКАЗ №565634 23.06.21</Card.Title>
        //             <Card.Text>
        //               1. Книга #008976
        //             </Card.Text>
        //             <Card.Text>
        //               2. Книга #273927
        //             </Card.Text>
        //           </Card.Body>
        //         </Card>
        //       </Col>
        //     ))}
        //     </Row>
        //  </div>
//         <div style={styles.quad}>
          //  <div style={styles.map}>
          //    <p>maps</p>
          //     <YMaps>
          //       <div id="map-basics">
          //         {showMap &&
          //           <Map state={mapState} />}
          //       </div>
          //     </YMaps>
          //  </div>
           
//          </div>
//        </div>