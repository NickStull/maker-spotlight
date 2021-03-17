import React, { useRef } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import API from "../../utils/API";

function AdminEdit(props) {
  // let address = (!props.user.data.address || props.user.data.address === "") ? "1234 Main St" : props.user.data.address
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const adminRef = useRef();
  const votedRef = useRef();
  const wantToRef = useRef();
  const candidateRef = useRef();
  const currentVotesRef = useRef();
  const totalVotesRef = useRef();
  const businessNameRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const bioRef = useRef();
  const activeRef = useRef();

  const initState = props.user.data.state === "" ? "Choose..." : props.user.data.state;
  console.log(initState);
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('-------------------in the submit---------------------');
    // console.log(adminRef.current.value);
    console.log(currentVotesRef.current.value);
    let firstNameTemp = firstNameRef.current.value ? firstNameRef.current.value : props.user.data.firstName;
    let lastNameTemp = lastNameRef.current.value ? lastNameRef.current.value : props.user.data.lastName;
    let emailTemp = emailRef.current.value ? emailRef.current.value : props.user.data.email;
    let currentVotesTemp = currentVotesRef.current.value ? currentVotesRef.current.value : props.user.data.currentVotes;
    let totalVotesTemp = totalVotesRef.current.value ? totalVotesRef.current.value : props.user.data.currentVotes;
    let businessNameTemp = businessNameRef.current.value ? businessNameRef.current.value : props.user.data.businessName;
    let address1Temp = address1Ref.current.value ? address1Ref.current.value : props.user.data.address;
    let address2Temp = address2Ref.current.value ? address2Ref.current.value : props.user.data.address2;
    let cityTemp = cityRef.current.value ? cityRef.current.value : props.user.data.city;
    let stateTemp = stateRef.current.value ? stateRef.current.value : props.user.data.state;
    stateTemp = stateTemp === "Choose..." ? "" : stateTemp;
    let zipCodeTemp = zipCodeRef.current.value ? zipCodeRef.current.value : props.user.data.zipCode;
    let phoneTemp = phoneRef.current.value ? phoneRef.current.value : props.user.data.phoneNumber;
    let websiteTemp = websiteRef.current.value ? websiteRef.current.value : props.user.data.website;
    let bioTemp = bioRef.current.value ? bioRef.current.value : props.user.data.bioText;
    let votedTemp = votedRef.current.value ? votedRef.current.value : props.user.data.voted;


    let userEdit = {
      userId: idRef.current.placeholder,
      firstName: firstNameTemp,
      lastName: lastNameTemp,
      email: emailTemp,
      admin: adminRef.current.checked,
      voted: votedTemp,
      wantTo: wantToRef.current.checked,
      candidate: candidateRef.current.checked,
      active: activeRef.current.checked,
      currentVotes: parseInt(currentVotesTemp),
      totalVotes: parseInt(totalVotesTemp),
      businessName: businessNameTemp,
      address: address1Temp,
      address2: address2Temp,
      city: cityTemp,
      state: stateTemp,
      zipCode: zipCodeTemp,
      phoneNumber: phoneTemp,
      website: websiteTemp,
      bioText: bioTemp
    }

    console.log(userEdit);
    API.editUser(userEdit)
      .then(
        results => {
          props.setEditToggle(true);
          // props.setSearch("");
          // console.log(results);
        }
      )
      .catch(err => console.log(err));
  }

  return (
    <Form className="editForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formGridUserId">
        <Form.Label>User Id</Form.Label>
        <Form.Control
          ref={idRef}
          placeholder={props.user.data.userId}
          readOnly
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            ref={firstNameRef}
            placeholder={props.user.data.firstName}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            ref={lastNameRef}
            placeholder={props.user.data.lastName}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          ref={emailRef}
          placeholder={props.user.data.email}
          readOnly
        />
      </Form.Group>
      <br></br>
      <Form.Row>
        <Form.Group as={Col} id="formGridAdmin">
          <Form.Check type="switch"
            ref={adminRef}
            label="Admin"
            id="admin-switch"
            defaultChecked={props.user.data.admin}
          />
        </Form.Group>

        <Form.Group as={Col} id="formGridWantTo">
          <Form.Check type="switch"
            ref={wantToRef}
            label="Wants to be featured"
            id="want-to-switch"
            defaultChecked={props.user.data.wantTo}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} id="formGridActive">
          <Form.Check type="switch"
            ref={activeRef}
            label="Active"
            id="active-switch"
            defaultChecked={props.user.data.active}
          />
        </Form.Group>


        <Form.Group as={Col} id="formGridCandidate">
          <Form.Check type="switch"
            ref={candidateRef}
            label="Feature Candidate"
            id="candidate-switch"
            defaultChecked={props.user.data.candidate}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridVoted">
          <Form.Label>Voted (-1 = No)</Form.Label>
          <Form.Control
            ref={votedRef}
            placeholder={props.user.data.voted}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCurrentVotes">
          <Form.Label>Current Votes</Form.Label>
          <Form.Control
            ref={currentVotesRef}
            placeholder={props.user.data.currentVotes}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTotalVotes">
          <Form.Label>Total Votes</Form.Label>
          <Form.Control
            ref={totalVotesRef}
            placeholder={props.user.data.totalVotes}
          />
        </Form.Group>
      </Form.Row>
      <br></br>
      <Form.Group controlId="formGridBusiness">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          ref={businessNameRef}
          placeholder={props.user.data.businessName}
        />
      </Form.Group>

      <Form.Row>
        <Col xs={8}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              ref={address1Ref}
              placeholder={props.user.data.address}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              ref={address2Ref}
              placeholder={props.user.data.address2}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            ref={cityRef}
            placeholder={props.user.data.city}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            value= { initState } 
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
            placeholder={props.user.data.zipCode}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          ref={phoneRef}
          placeholder={props.user.data.phoneNumber}
        />
      </Form.Group>

      <Form.Group controlId="formGridWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control
          ref={websiteRef}
          placeholder={props.user.data.website}
        />
      </Form.Group>

      <Form.Group controlId="formGridBio">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          ref={bioRef}
          placeholder={props.user.data.bioText}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Form>
  );
}

export default AdminEdit;
