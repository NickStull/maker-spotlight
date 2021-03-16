import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Container, Col } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';
import API from "../../utils/API"

const UserAccount = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const wantToRef = useRef();
  const businessNameRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const bioRef = useRef();

  const { currentUser, userInfo } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    if (currentUser) {
      console.log(userInfo)
      // getUser();
    }
  }, []);

  // const getUser = async () => {
  //   let dbResults;
  //   try {
  //     dbResults = await API.getUser(currentUser.uid);
  //     if(dbResults){
  //       setUser(dbResults.data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
    
  // };
  
  return (
    <>
      {userInfo  
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
                      defaultValue={ userInfo.firstName } 
                      ref={firstNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      name="lastName"
                      type="text" 
                      value={ userInfo.lastName }  
                      ref={lastNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      name="email"
                      type="email" 
                      value={ currentUser.email } 
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  {/* <Form.Group >
                    <Form.Check 
                      type="switch"
                      label="Wants to be featured" 
                      id="want-to-switch"
                      ref={wantToRef}
                      defaultChecked={ user.wantTo } 
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridBusiness">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control 
                      ref={ businessNameRef }
                      placeholder={ user.businessName } 
                    />
                  </Form.Group>

                  <Form.Row>
                    <Col xs={8}>
                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                          ref={ address1Ref } 
                          placeholder={ user.address } 
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control 
                          ref={ address2Ref } 
                          placeholder={ user.address2 } 
                        />
                      </Form.Group>
                    </Col> 
                    </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                        ref={ cityRef }
                        placeholder={ user.city } 
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control 
                        as="select" 
                        defaultValue="Choose..." 
                        ref={ stateRef }
                      >
                        <option>Choose...</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control 
                        ref={ zipCodeRef }
                        placeholder={ user.zipCode } 
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                      ref={ phoneRef }
                      placeholder={ user.phoneNumber } 
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control 
                      ref={ websiteRef }
                      placeholder={ user.website } 
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5}
                      ref={ bioRef } 
                      placeholder={ user.bioText } 
                    />
                  </Form.Group> */}
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
