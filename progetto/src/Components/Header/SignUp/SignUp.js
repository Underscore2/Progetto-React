import { Modal, Form } from "react-bootstrap";
import { store } from "../../../states/Store";
import useSignUp from "./utilities/useSignUp";
import React from "react";

export default function SignUp() {
    const { handleClose, handleEmail, handlePassword, handleAgreement, handleUsername, submitLogin } = useSignUp();
    return (

        <Modal show={store.getState().modalSignup} onHide={handleClose} >
            <Form className="bg-dark">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="font-primary">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mt-3">
                        <Form.Label className="font-primary">Username</Form.Label>
                        <Form.Control
                            id="username"
                            name='username'
                            type="text"
                            required={true}
                            placeholder="Username"
                            onChange={handleUsername}
                            className="bg-secondary border-dark"
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="font-primary">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name='email'
                            required={true}
                            placeholder="name@example.com"
                            autoFocus
                            onChange={handleEmail}
                            className="bg-secondary border-dark"
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="font-primary">Password</Form.Label>
                        <Form.Control
                            id="password"
                            name='password'
                            type="password"
                            required={true}
                            placeholder="********"
                            onChange={handlePassword}
                            className="bg-secondary border-dark"
                        />
                    </Form.Group>

                    <Form.Group className="mt-3 d-flex gap-3">
                        <Form.Label className="font-primary mb-1">
                            Accept terms and conditions
                        </Form.Label>
                        <input type="checkbox" required onClick={handleAgreement} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <button type="submit" variant="bg-orange" onClick={submitLogin} className="submit font-primary bg-orange rounded">
                        Sign Up
                    </button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}