import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';

const UserAccount = () => {
  const { accountInfo } = useAuth();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Edit Account Info</h2>

          <Form className="form">
            <Form.Group controlId="formBasicFirst">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                name="firstName"
                type="text" 
                value={ accountInfo.firstName } 
                // ref={firstNameRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicLast">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                name="lastName"
                type="text" 
                value={ accountInfo.lastName }  
                // ref={lastNameRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                name="email"
                type="email" 
                value={ accountInfo.email } 
                // ref={emailRef}
                required
              />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default UserAccount
