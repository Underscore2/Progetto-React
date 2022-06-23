import { Button, Modal, Form, } from "react-bootstrap";
import React from "react";
import useLogin from "../Login/utilities/useLogin.js";

export default function Login() {

    const {
        handleEmail, handlePassword,
        storagePush, handleClose,
        emailRef, loginStatusChanger,
        passwordRef
    } = useLogin()


    return (
        <>
            <Modal show={loginStatusChanger} onHide={handleClose}>
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