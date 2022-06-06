import React from 'react'
import { useEffect } from 'react'
import texts from '../utilities/texts.json';
import '../css/helper-class.css'
import { Col, Space, Row } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/egg-fill.svg'
function Footer() {
    useEffect(() => {
        texts.map((item) => { return console.log(item) })
    }, [])
    return (
        < div >
            {texts.map((item) => {
                return (
                    <Row wrap='true' align='middle' className='white-modules p-3 d-flex  align-center'>
                        <Col xs={24} lg={{ span: 13, order: 2, offset: 8 }} align='middle'>
                            <ul className='list-style p-0 m-0'>
                                <Space size={20}>
                                    <li ><a hreft="#" className='link font-primary w-100'>{item.footer.footerLink1}</a></li>
                                    <li ><a hreft="#" className='link font-primary w-100'>{item.footer.footerLink2}</a></li>
                                    <li ><a hreft="#" className='link font-primary w-100'>{item.footer.footerLink3}</a></li>
                                </Space>
                            </ul>
                        </Col>
                        <Col xs={24} lg={{ span: 3, order: 1 }} className='d-flex flex-col justify-center align-center'>
                            <img src={logo} alt='logo' style={{ width: '50px', height: 'auto' }}></img>
                            <p className='font-secondary'>{item.footer.subtitle}</p>
                        </Col>
                        <Col xs={{ span: 24, order: 3 }} className='py-3 font-secondary' align='start'>{item.footer.description}</Col>
                    </Row>
                )
            })}
        </div >
    )
}

export default Footer;