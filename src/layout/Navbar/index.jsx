// import React from 'react'
// import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import profile from "../../assets/profile.png"
import { FaHistory } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs';
// import ReplayIcon from '@mui/icons-material/Replay';
// import HistoryIcon from '@mui/icons-material/History';

const Navbars = () => {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">

            <img src={profile} alt='profile image' className='avartar' width={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id=" ">
            {/* <Col xl="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col> */}
            <form className="d-flex form-control" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </Navbar.Collapse>
          <Navbar.Text className='avartar d-flex '>
            <div className='d-flex flex-row justify-content-center flex-wrap align-content-center align-items-center me-3'>
              {/* <img src={profile} alt="" className='avartar me-3' width={40} /> */}
              <FaHistory  style={{width:'40px'}}/>
              <p className='text-center m-auto'>history</p>
            </div>
            <div className='d-flex flex-row justify-content-center flex-wrap align-content-center align-items-center me-3'>
              {/* <img src={profile} alt="" className='avartar me-3' width={40} /> */}
              <BsArrowReturnLeft style={{width:'40px'}}/>
              <p className='text-center m-auto'>Return</p>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbars
