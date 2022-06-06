import React, { useState } from 'react';
import { Row, Col, Space, Typography } from 'antd';
import './utilities/texts.json';
import './css/helper-class.css';
import logo from './images/egg-fill.svg';
import Modal from 'antd/lib/modal/Modal';



function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  }
  return (
    < >
      <div className='p-1'>
        <Row className='white-modules d-flex align-center px-5' style={{ height: '7vh' }}>
          <Col span={6} >
            <div>
              <img src={logo} style={{ width: '50px', height: 'auto' }} alt='logo'></img>
            </div>
          </Col>
          <Col span={6} offset={12} className="d-flex justify-end w-100" >
            <ul className='list-style d-flex p-0 m-0 align-center'>
              <Space size={15} className="d-flex align-center">
                <li>
                  <a href='#' className='text-decoration font-primary'>Features</a>
                </li>
                <li>
                  <a href='#' className='text-decoration font-primary'>Pricing</a>
                </li>
                <li>
                  <a href='#' className='text-decoration font-primary' onClick={showModal}>Login</a>
                </li>

                <li>
                  <a href='#' className='text-decoration font-primary'>Sign Up</a>
                </li>
              </Space>
            </ul>
          </Col>
          <Modal className='white-modules bg-black' title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Row>
      </div>
    </>
  )
}

export default Navbar;