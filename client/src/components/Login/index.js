import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/contexts/AuthContext";
import ExitButton from "../ExitButton";
import Home from "../Home";
import './login.css'

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    } finally {
      if (!error) {
        handleClose();
        window.location.reload();
      }
    }
    setLoading(false);
  };
  return (
    <>
      <Button variant="primary" className='loginBtn' onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ExitButton url={"/"} />
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div>{error}</div>}
          <Form className="form" onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit" disabled={loading}>
              Log In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>Need an account?</div>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
