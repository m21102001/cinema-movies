import React from 'react'
import styles from './shop.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../../assets/image1.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const index = () => {

  const chairs = [
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
    {
      chair: "A1"
    },
  ]

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col lg={1}>
            <div className={styles.return}>
              
            </div>
          </Col>
          <Col lg={5} style={{textAlign:"left"}}>
          <div>
            <Row style={{marginBottom:"2rem"}}>
                <Card style={{background:"#f3f3fa",width:"100%"}}>
                <div style={{display:"flex",margin:"0.5rem"}}>
                <Card.Img variant="top" src={image1} style={{width:"12rem"}} />
                <Card.Body>
                  <Card.Title>Marvel Spider-Man Movie 2</Card.Title>
                  <Card.Subtitle style={{display:"flex",justifyContent:"space-between"}}>
                  <small>Action</small>
                  <div>4.8(+999)</div>
                  </Card.Subtitle>
                  <Card.Text>
                    <h3>Hall number</h3>
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
                        <h5>Hall 5</h5>
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
              <Card style={{background:"#f3f3fa",width:"100%"}}>
                <form>

                  <div style={{display:"flex"}}>
                  <Card.Body>
                    <Card.Title>Discount</Card.Title>
                    <div style={{display:"flex",marginBottom:"1.5rem"}}>
                      <input type='text' style={{width:"90%",background:"#dddddd",border:"none",borderRadius:"0.3rem",marginRight:"0.3rem"}}/>
                      <button style={{backgroundColor:"#041C45",color:"white",padding:"1rem",borderRadius:"0.3rem"}}>Add</button>
                    </div>
                    <Card.Body>
                      <Card.Title>Payment Method</Card.Title>
                      <div style={{display:"flex"}}>
                      <Card.Text>
                        <input type='radio' id='method1' name='method'  value="method1"/>
                        <label For="method1">Cash</label>
                      </Card.Text>
                      <Card.Text>
                        <input type='radio' id='method2' name='method'  value="method2"/>
                        <label For="method2">Credit card </label>
                      </Card.Text>
                      </div>
                    </Card.Body>
                    <Card.Subtitle style={{marginBottom:"1rem"}}>Selected Seats : 32</Card.Subtitle>
                    <Card.Subtitle style={{marginBottom:"1rem"}}>Total Payment : 300,60$</Card.Subtitle>
                    <Button style={{backgroundColor:"#041C45",border:"#041C45",padding:"1rem 0rem",color:"white",width:"100%",borderRadius:"0.3rem"}}>Book a Ticket</Button>
                  </Card.Body>
                  </div>
                  </form>
                </Card>
            </Row>
          </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5} style={{marginTop:"2rem"}}>
          <Row style={{background:"#f3f3fa"}} className={styles.screen}>
              Screen this way
          </Row>
          <Row style={{background:"#f3f3fa",height:"70%"}}>
            {/* {chairs.map((e) => (
              <div className={styles.Chair}>{e.chair}</div>
            ))} */}
            <div className={styles.Chair}>
              <p>A1</p>
            </div>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default index
