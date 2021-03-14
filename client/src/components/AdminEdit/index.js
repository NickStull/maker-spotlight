import React from "react";
import { Form, Col, Button } from 'react-bootstrap';

function AdminEdit(props) {
  console.log("-------------props------------------");
  console.log(props);
  return (
    <Form>
      <Form.Group controlId="formGridUserId">
        <Form.Label>User Id</Form.Label>
        <Form.Control placeholder={ props.user.data.userId } readOnly />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder={ props.user.data.firstName } />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder={ props.user.data.lastName } />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={ props.user.data.email } />
      </Form.Group>

      <Form.Row>
        <Form.Group id="formGridAdmin">
          <Form.Check type="switch" 
                      label="Admin" 
                      id="admin-switch"
                      defaultChecked={ props.user.data.admin } 
          />
        </Form.Group>
{/* START HERE */}
        <Form.Group id="formGridAdmin">
          <Form.Check type="switch" 
                      label="Admin" 
                      id="admin-switch"
                      defaultChecked={ props.user.data.admin } 
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    
    // <div>
    //   {/* UserID */}
    //   {/* First Name */} 
    //   {/* Last Name */}
    //   { props.user.data.firstName}
    // </div>
  );
}

export default AdminEdit;
