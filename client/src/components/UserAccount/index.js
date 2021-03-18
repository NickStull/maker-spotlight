import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Container, Col } from "react-bootstrap";
import { useAuth } from "../../utils/contexts/AuthContext";
import API from "../../utils/API";
import ExitButton from "../ExitButton";

const UserAccount = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
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
  const [wantToCheck, setWantToCheck] = useState(false);

  useEffect(() => {
    if (userInfo.wantTo) {
      setWantToCheck(true);
    }
  }, []);

  const wantToClick = () => {
    setWantToCheck(wantToRef.current.checked ? true : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let firstNameTemp = firstNameRef.current.value
      ? firstNameRef.current.value
      : userInfo.firstName;
    let lastNameTemp = lastNameRef.current.value
      ? lastNameRef.current.value
      : userInfo.lastName;

    let userEdit;

    if (wantToCheck) {
      let businessNameTemp = businessNameRef.current.value
        ? businessNameRef.current.value
        : userInfo.businessName;
      let address1Temp = address1Ref.current.value
        ? address1Ref.current.value
        : userInfo.address;
      let address2Temp = address2Ref.current.value
        ? address2Ref.current.value
        : userInfo.address2;
      let cityTemp = cityRef.current.value
        ? cityRef.current.value
        : userInfo.city;
      let stateTemp = stateRef.current.value
        ? stateRef.current.value
        : userInfo.state;
      stateTemp = stateTemp === "Choose..." ? "" : stateTemp;
      let zipCodeTemp = zipCodeRef.current.value
        ? zipCodeRef.current.value
        : userInfo.zipCode;
      let phoneTemp = phoneRef.current.value
        ? phoneRef.current.value
        : userInfo.phoneNumber;
      let websiteTemp = websiteRef.current.value
        ? websiteRef.current.value
        : userInfo.website;
      let bioTemp = bioRef.current.value
        ? bioRef.current.value
        : userInfo.bioText;

      userEdit = {
        userId: userInfo.userId,
        firstName: firstNameTemp,
        lastName: lastNameTemp,
        wantTo: wantToRef.current.checked,
        businessName: businessNameTemp,
        address: address1Temp,
        address2: address2Temp,
        city: cityTemp,
        state: stateTemp,
        zipCode: zipCodeTemp,
        phoneNumber: phoneTemp,
        website: websiteTemp,
        bioText: bioTemp,
      };
    } else {
      userEdit = {
        userId: userInfo.userId,
        firstName: firstNameTemp,
        lastName: lastNameTemp,
        wantTo: wantToRef.current.checked,
      };
    }

    console.log(userEdit);

    await API.editUser(userEdit)
    .then(() => window.location.assign('/'))
    .catch((err) => console.log(err));
  };

  return (
    <>
      {userInfo ? (
        <Container
          className="d-flex mt-4 justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <ExitButton url={"/"} />
              <Card.Body>
                <h2 className="text-center mb-4">Edit Account Info</h2>

                <Form className="form" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      type="text"
                      defaultValue={userInfo.firstName}
                      ref={firstNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      defaultValue={userInfo.lastName}
                      ref={lastNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      label="I want to be featured!"
                      id="want-to-switch"
                      ref={wantToRef}
                      defaultChecked={userInfo.wantTo}
                      onClick={wantToClick}
                    />
                  </Form.Group>
                  {wantToCheck ? (
                    <>
                      <Form.Group controlId="formGridBusiness">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                          ref={businessNameRef}
                          placeholder={userInfo.businessName}
                        />
                      </Form.Group>
                      <Form.Row>
                        <Col xs={8}>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              ref={address1Ref}
                              placeholder={userInfo.address}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control
                              ref={address2Ref}
                              placeholder={userInfo.address2}
                            />
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            ref={cityRef}
                            placeholder={userInfo.city}
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            ref={stateRef}
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
                            ref={zipCodeRef}
                            placeholder={userInfo.zipCode}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Group controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          ref={phoneRef}
                          placeholder={userInfo.phoneNumber}
                        />
                      </Form.Group>
                      <Form.Group controlId="formGridWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                          ref={websiteRef}
                          placeholder={userInfo.website}
                        />
                      </Form.Group>
                      <Form.Group controlId="formGridBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          ref={bioRef}
                          placeholder={userInfo.bioText}
                        />
                      </Form.Group>
                    </>
                  ) : (
                    <></>
                  )}
                  <Button className="w-100" variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserAccount;
