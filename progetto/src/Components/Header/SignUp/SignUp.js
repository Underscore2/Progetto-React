import { Modal, Form } from "react-bootstrap";
import { store } from "../../../states/Store";
import useSignUp from "./utilities/useSignUp";
import React from "react";

export default function SignUp() {
    const { handleClose, handleEmail, handlePassword, handleAgreement, handleUsername, submitLogin } = useSignUp();
    return (

        <Modal show={store.getState().modalSignup} onHide={handleClose} >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            id="username"
                            name='username'
                            type="text"
                            required={true}
                            placeholder="Username"
                            onChange={handleUsername}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name='email'
                            pattern="[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required={true}
                            placeholder="name@example.com"
                            autoFocus
                            onChange={handleEmail}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="password"
                            name='password'
                            type="password"
                            required={true}
                            placeholder="Password"
                            onChange={handlePassword}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Accept terms and conditions
                        </Form.Label>
                        <input type="checkbox" required onClick={handleAgreement}></input>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" variant="bg-orange" onClick={submitLogin}>
                        Sign Up
                    </button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}