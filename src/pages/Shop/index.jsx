import React, { useState } from 'react'
import styles from './shop.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../../assets/image1.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsChevronLeft } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
// import { IoCashOutline } from 'react-icons/io';


const index = () => {

  // const [colors,setcolor] = useState('');

  // const availableColors = colors.filter(chairs => chairs.type === "available")
  // const chairs = [
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"

  //   },
  //   {
  //     chair: "A1",
  //     type:"selected",

  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"sold"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  //   {
  //     chair: "A1",
  //     type:"selected"
  //   },
  //   {
  //     chair: "A1",
  //     type:"available"
  //   },
  // ]

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col lg={1} style={{ marginBottom: "1.5rem" }}>
            <div className={styles.return}>
              <BsChevronLeft style={{ width: "1.5rem", height: "1.5rem", marginTop: "0.5rem", marginRight: "0.1rem" }} />
            </div>
          </Col>
          <Col lg={5} style={{ textAlign: "left" }}>
            <div>
              <Row style={{ marginBottom: "2rem" }}>
                <Card style={{ background: "#f3f3fa", width: "100%" }}>
                  <div style={{ display: "flex", margin: "0.5rem" }}>
                    <Card.Img variant="top" src={image1} style={{ width: "12rem" }} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          marginBottom: "1rem"
                        }}
                      >Marvel Spider-Man Movie 2</Card.Title>
                      <Card.Subtitle style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <small>Action</small>
                        <div><AiFillStar style={{ fontSize: "1.2rem", color: "#DAD101", marginRight: "0.2rem" }} /><small>4.8(+999)</small></div>
                      </Card.Subtitle>
                      <Card.Text>
                        <h3
                          style={{ marginBottom: "1rem" }}
                        >
                          Hall number
                        </h3>
                        <div className={styles.hall}>
                          <Row>
                            <Col>
                              <h5>Hall 1</h5>
                            </Col>
                            <Col>
                              <h5>Hall 2</h5>
                            </Col>
                            <Col>
                              <h5>Hall 3</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Hall 4</h5>
                            </Col>
                            <Col>
                              <h5 className={styles.special}>Hall 5</h5>
                            </Col>
                            <Col>
                              <h5>Hall 6</h5>
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Row>
              <Row>
                <Card style={{ background: "#f3f3fa", width: "100%" }}>
                  <form>

                    <div style={{ display: "flex" }}>
                      <Card.Body>
                        <Card.Title>Discount</Card.Title>
                        <div style={{ display: "flex", marginBottom: "1.5rem" }}>
                          <input type='text' style={{ width: "90%", background: "#dddddd", border: "none", borderRadius: "0.3rem", marginRight: "0.3rem" }} />
                          <button style={{ backgroundColor: "#041C45", color: "white", padding: "1rem", borderRadius: "0.3rem" }}>Add</button>
                        </div>
                        <Card.Body>
                          <Card.Title>Payment Method</Card.Title>
                          <div style={{ display: "flex" }}>
                            <Card.Text>
                              <input type='radio' id='method1' name='method' value="method1" />
                              <label For="method1" style={{ marginLeft: "1rem" }}><BsCreditCard style={{ fontSize: "1.5rem", marginRight: "0.3rem" }} />Cash</label>
                            </Card.Text>
                            <Card.Text style={{ marginLeft: "8rem" }}>
                              <input type='radio' id='method2' name='method' value="method2" />
                              <label For="method2" style={{ marginLeft: "1rem" }}><BsCreditCard style={{ fontSize: "1.5rem", marginRight: "0.3rem" }} />Credit card </label>
                            </Card.Text>
                          </div>
                        </Card.Body>
                        <Card.Subtitle style={{ marginBottom: "1rem" }}>Selected Seats : 32</Card.Subtitle>
                        <Card.Subtitle style={{ marginBottom: "1rem" }}>Total Payment : 300,60$</Card.Subtitle>
                        <Button style={{ backgroundColor: "#041C45", border: "#041C45", padding: "1rem 0rem", color: "white", width: "100%", borderRadius: "0.3rem" }}>Book a Ticket</Button>
                      </Card.Body>
                    </div>
                  </form>
                </Card>
              </Row>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5} style={{ marginTop: "2rem" }}>
            <Row style={{ background: "#f3f3fa", fontSize: "1.5rem" }} className={styles.screen}>
              Screen this way
            </Row>
            <Row style={{ height: "70%" }}>
              {/* {chairs.map((e) => ( */}
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chairSold}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chair}>A1</div>
                <div className={styles.chairSelected}>A1</div>
                <div className={styles.chair}>A1</div>
              {/* ))} */}
            </Row>
            <Row>
              <div className={styles.footer}>
              <p>Chairs: C8, C9, C10</p>
              <div style={{display:"flex"}}>
                <p style={{display:"flex"}}><div className={styles.sold}></div>Sold</p>
                <p style={{display:"flex",marginLeft:"1rem"}}><div className={styles.available}></div>Available</p>
                <p style={{display:"flex",marginLeft:"1rem"}}><div className={styles.selected}></div>Selected</p>
              </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default index
