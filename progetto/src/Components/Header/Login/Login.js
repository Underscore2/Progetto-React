import { Modal, Form, } from "react-bootstrap";
import React, { useContext } from "react";
import useLogin from "../Login/utilities/useLogin.js";
import { store } from "../../../states/Store.js";
import "../../../css/helper-class.css"

export default function Login(props) {
    const {
        handleEmail, handlePassword,
        storagePush, handleClose,
        email, password
    } = useLogin(props)

    return (
        <>
            <Modal show={store.getState().modalLogin} onHide={handleClose}>
                <Form className="bg-dark">
                    <Modal.Header closeButton className="border-0">
                        <Modal.Title className="font-primary">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="font-primary">Email address</Form.Label>
                            <Form.Control
                                onChange={handleEmail}
                                type="email"
                                id="email"
                                name='email'
                                value={email}
                                pattern="[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required={true}
                                placeholder="name@example.com" bg="primary"
                                autoFocus
                                className="bg-secondary border-dark"

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-primary">Password</Form.Label>
                            <Form.Control
                                id="password"
                                onChange={handlePassword}
                                name='password'
                                type="password"
                                value={password}
                                required={true}
                                placeholder="********"
                                className="bg-secondary border-dark"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="border-0">
                        <button type="submit" variant="bg-orange" onClick={storagePush} className="submit font-primary bg-orange rounded">
                            Login
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}