import { Button, Modal, Form, } from "react-bootstrap";
import React, { useEffect } from "react";
import useLogin from "../Login/utilities/useLogin.js";
import { store } from "../../../states/Store.js";

export default function Login() {

    const {
        handleEmail, handlePassword,
        storagePush, handleClose,
        email, password
    } = useLogin()
  

   

    return (
        <>
            <Modal show={store.getState().modal} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleEmail}
                                type="email"
                                id="email"
                                name='email'
                                value={email}
                                pattern="[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required={true}
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password"
                                onChange={handlePassword}
                                name='password'
                                type="password"
                                value={password}
                                required={true}
                                placeholder="password"
                            />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button type="submit" variant="bg-orange" onClick={storagePush} >
                            Login
                        </button>
                        <button type="submit" variant="bg-orange" onClick={storagePush} >
                            testDev
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}