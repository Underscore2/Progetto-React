import React, { useState, useEffect } from 'react';
import texts from '../utilities/texts.json';
import '../css/helper-class.css';
import logo from '../images/egg-fill.svg';
import {Row, Col} from 'react-bootstrap';
import menu  from '../images/cell.svg';

function Navbar() {
  useEffect(() => {
    texts.map((item) => { console.log(item) })
  }, [])
  return (
      <div className='bgblack p-3 m-0'>
        <Row className='m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100'>
          <Col className='p-1 align-items-center justify-content-around flex-sm-row'  xs={9} sm={9} md={7}>
              <img src={logo} className='uovo' style={{ width: '50px', height: 'auto' }} alt='logo'></img>
            <a href='!#' className='text-decoration-none font-secondary '>
             LMAO Corporation
            </a>
          </Col>
          <Col xs={3} sm={3} md={5} className='d-md-flex p-1 justify-content-end align-items-center p-0 m-0'>
            <ul className='gx-5 list-unstyled d-md-flex d-none justify-content-sm-end p-0 m-0 gap:5' >
                <li>
                  <a href='' className='text-decoration-none font-secondary px-2'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='' className='text-decoration-none font-secondary px-2'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='' className='text-decoration-none font-secondary px-2'>
                    Login
                  </a>
                </li>
                <li>
                  <a href='' className='text-decoration-none font-secondary px-2'>Sign Up</a>
                </li>
            </ul>
            <div className='d-flex justify-content-center align-items-center d-md-none'>
              <a href=''>
                <img src={menu} className='menu' style={{ width: '40px', height: 'auto' }}></img>
              </a>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default Navbar;