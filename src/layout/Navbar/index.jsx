import React from 'react'
import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import profile from "../../assets/profile.png"
// import ReplayIcon from '@mui/icons-material/Replay';
// import HistoryIcon from '@mui/icons-material/History';

const Navbars = () => {
  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">

          <img src={profile} alt='profile image' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Navbar.Collapse>
        <Navbar.Text>
          {/* <p>history</p>
          <img src={HistoryIcon} alt="" />
          <p>history</p>
          <img src={ReplayIcon} alt="" /> */}
        </Navbar.Text>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbars
