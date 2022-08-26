import { Button, Modal, Form, } from "react-bootstrap";
import React from "react";
import { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Homepage from "../Body/Homepage/Homepage";


export default function Login() {
    const passwordRef = useRef('password')
    const emailRef = useRef('email')
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleEmail() {
        setEmail(emailRef.current.value)
        console.log("email: ", email)
    }

    function handlePassword() {
        setPassword(passwordRef.current.value)
        console.log("password: ", password)

    }

    function storagePush() {

       
        fetch('http://localhost:3001/auth/signin',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password
        })}).then((data)=>data.json()).then(data=>{if(data.authorized){
            return(
            console.log(data),
            localStorage.setItem("email", email),
            localStorage.setItem("password", password),
            navigate("/homepage"),
            setShow(false))
        }else{
            return(localStorage.clear(),
            setPassword(""))
        }}).catch(err=>console.error(err))
    }
    
    function handleClose() {
        setShow(false)
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Homepage />
            {!show && <Navigate to='/' replace />}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                ref={emailRef}
                                onChange={handleEmail}
                                type="email"
                                name='email'
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef}
                                onChange={handlePassword}
                                name='password'
                                type="password"
                                placeholder="password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="bg-orange" onClick={storagePush}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}