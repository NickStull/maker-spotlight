import React, { useRef, useState } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/contexts/AuthContext";
import "./signupTextBtn.css";

import ExitButton from "../ExitButton";

const SignupTextBtn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      console.log("before await");
      let firebaseSignup = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("after await");
      let newUser = {
        userId: firebaseSignup.user.uid,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      };
      await API.saveUser(newUser);
      await API.subscribe(newUser).then(() => {
        handleClose();
        window.location.reload();
      });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <>
      <button id="signupTextBtn" onClick={handleShow}>
        SIGN UP
      </button>
      <Modal show={show} onHide={handleClose}>
        <ExitButton url={"/"} />
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div>{error}</div>}
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirst">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                ref={firstNameRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicLast">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                ref={lastNameRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>Already have an account?</div>
          <Button variant="secondary" onClick={handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignupTextBtn;
