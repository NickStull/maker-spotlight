import React, { useEffect, useState } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';
import API from "../../utils/API"

const UserAccount = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("use effect")
    if (currentUser) {
      console.log("in if")
      getUser();
    }
  }, []);

  const getUser = async () => {
    let dbResults;
    try {
      dbResults = await API.getUser(currentUser.uid);
    } catch (err) {
      console.error(err);
    } finally {
      setUser(dbResults.data);
    }
  };

  return (
    <>
      {user  
        ?<Container className="d-flex mt-4 justify-content-center" style={{ minHeight: "100vh" }} >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Edit Account Info</h2>

                <Form className="form">
                  <Form.Group controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      name="firstName"
                      type="text" 
                      defaultValue={ user.firstName } 
                      // ref={firstNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      name="lastName"
                      type="text" 
                      value={ user.lastName }  
                      // ref={lastNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      name="email"
                      type="email" 
                      value={ currentUser.email } 
                      // ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Check type="switch"
                                label="Wants to be featured" 
                                id="want-to-switch"
                                // defaultChecked={ props.user.data.wantTo } 
                    />
                  </Form.Group>
                  <Button className="w-100" variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
        : <></>
      } 
    </>
  )
}

export default UserAccount
