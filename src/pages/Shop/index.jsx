import styles from './shop.module.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../assets/image1.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsChevronLeft } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';
// import { IoCashOutline } from 'react-icons/io';

const index = () => {
  const [paymentmethod, setMethod] = useState('Cash');
  const [totalPrice, setTotalPrice] = useState('300,60$');

  // const handlerCreditMethod = () => {
  //   setCreditMethod(creditmethod);
  // }
  // const handlerCashMethod = () => {
  //   setCashMethod(cashmethod);
  // }

  const onClickPaymentMethod = (e) => {
    setMethod(e);
    if (e == 'Cash') setTotalPrice('300,60$');
    else setTotalPrice('0$');
  };

  const [selectedchair, setSelectedchair] = useState([]);

  const chairs = [
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'sold',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'available',
    },
    {
      chair: 'A1',
      type: 'selected',
    },
    {
      chair: 'A1',
      type: 'available',
    },
  ];

  return (
    <div className={styles.root}>
      <Container style={{ padding: '1rem 0', margin: '0 3rem' }}>
        <Row style={{ gap: '2rem', justifyContent: 'center' }}>
          <Col lg={1}>
            <div
              style={{
                width: 'max-content',
                height: 'max-content',
              }}
            >
              <div className={styles.return}>
                <Link to="/">
                  <BsChevronLeft
                    style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      marginTop: '0.5rem',
                      marginRight: '0.1rem',
                    }}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={5} style={{ textAlign: 'left' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Row>
                <Card
                  style={{
                    background: '#f3f3fa',
                    width: '100%',
                    padding: '1rem',
                  }}
                >
                  <div className={styles.card}>
                    <Card.Img
                      variant="top"
                      className={styles.cardimg}
                      src={image1}
                      style={{ width: '12rem' }}
                    />
                    <Card.Body>
                      <Card.Title>Marvel Spider-Man Movie 2</Card.Title>
                      <Card.Subtitle
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '.7rem',
                        }}
                      >
                        <small>Action</small>
                        <div>
                          <AiFillStar
                            style={{
                              fontSize: '1.2rem',
                              color: '#DAD101',
                              marginRight: '0.2rem',
                            }}
                          />
                          <small>4.8(+999)</small>
                        </div>
                      </Card.Subtitle>
                      <Card.Text>
                        <h3>Hall number</h3>
                        <div className={styles.hall}>
                          <div className={styles.top}>
                            <span>Hall 1 </span>
                            <span> Hall 2</span>
                            <span> Hall 3</span>
                          </div>
                          <div className={styles.under}>
                            <span>Hall 4</span>
                            <span>Hall 5 </span>
                            <span>Hall 6</span>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Row>
              <Row>
                <Card style={{ background: '#f3f3fa', width: '100%' }}>
                  <form>
                    <div style={{ display: 'flex' }}>
                      <Card.Body>
                        <Card.Title>Discount</Card.Title>
                        <div
                          style={{ display: 'flex', marginBottom: '1.5rem' }}
                        >
                          <input
                            type="text"
                            style={{
                              width: '90%',
                              background: '#dddddd',
                              border: 'none',
                              borderRadius: '0.3rem',
                              marginRight: '0.3rem',
                              padding: ' 0 .7rem',
                            }}
                          />
                          <button
                            style={{
                              backgroundColor: '#041C45',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '0.3rem',
                            }}
                          >
                            Add
                          </button>
                        </div>
                        <Card.Body>
                          <Card.Title>Payment Method</Card.Title>
                          <div style={{ display: 'flex' }}>
                            <Card.Text
                              onClick={() => onClickPaymentMethod('Cash')}
                            >
                              <input
                                type="radio"
                                id="method1"
                                name="method"
                                value="Cash"
                                checked={paymentmethod == 'Cash'}
                              />
                              <label
                                htmlFor="method1"
                                style={{ marginLeft: '1rem' }}
                              >
                                <BsCreditCard
                                  style={{
                                    fontSize: '1.5rem',
                                    marginRight: '0.3rem',
                                  }}
                                />
                                Cash
                              </label>
                            </Card.Text>
                            <Card.Text
                              style={{ marginLeft: '8rem' }}
                              onClick={() => onClickPaymentMethod('Credit')}
                            >
                              <input
                                type="radio"
                                id="method2"
                                name="method"
                                value="Credit"
                              />
                              <label
                                htmlFor="method2"
                                style={{ marginLeft: '1rem' }}
                              >
                                <BsCreditCard
                                  style={{
                                    fontSize: '1.5rem',
                                    marginRight: '0.3rem',
                                  }}
                                />
                                Credit card{' '}
                              </label>
                            </Card.Text>
                          </div>
                        </Card.Body>
                        <Card.Subtitle style={{ marginBottom: '1rem' }}>
                          Selected Seats : 32
                        </Card.Subtitle>
                        <Card.Subtitle style={{ marginBottom: '1rem' }}>
                          Total Payment : {totalPrice}
                        </Card.Subtitle>
                        <Link to="/report">
                          <Button
                            style={{
                              backgroundColor: '#041C45',
                              border: '#041C45',
                              padding: '1rem 0rem',
                              color: 'white',
                              width: '100%',
                              borderRadius: '0.3rem',
                            }}
                          >
                            Book a Ticket
                          </Button>
                        </Link>
                      </Card.Body>
                    </div>
                  </form>
                </Card>
              </Row>
            </div>
          </Col>

          <Col lg={5} style={{ gap: '1rem' }}>
            <Row
              style={{ background: '#f3f3fa', fontSize: '1.5rem' }}
              className={styles.screen}
            >
              Screen this way
            </Row>
            <Row
              style={{
                height: '55%',
                width: '110%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {chairs.map((e, index) => {
                e.id = index;
                return (
                  <div
                    className={
                      selectedchair == e.id
                        ? `${styles.selectedcolor} ${styles.chair} `
                        : `${styles.chair} `
                    }
                    onClick={() => {
                      if (selectedchair == e.id) setSelectedchair(-1);
                      else setSelectedchair(e.id);
                    }}
                    key={e.id}
                  >
                    {e.chair}
                  </div>
                );
              })}
            </Row>
            <Row>
              <div className={styles.footer}>
                <p>Chairs: C8, C9, C10</p>
                <div style={{ display: 'flex' }}>
                  <p style={{ display: 'flex' }}>
                    <div className={styles.sold}></div>Sold
                  </p>
                  <p style={{ display: 'flex', marginLeft: '1rem' }}>
                    <div className={styles.available}></div>Available
                  </p>
                  <p style={{ display: 'flex', marginLeft: '1rem' }}>
                    <div className={styles.selected}></div>Selected
                  </p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
