import React, { useState, useEffect } from "react";
// import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container, Button } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
// import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ firstName, lastName, bioText, location, business, webAddress, id, handleShow, arrayPosition }) => {

	const [displayModalState, setDisplayModalState] = useState(false);

	useEffect(() => {

	}, [displayModalState])

	const findMaker = (makerId) => {
		console.log('MAKER ID', makerId);

		// setUserChoiceState(event.value);
	}

	return (
		<Container className="profile fluid">
			<Row className='header fluid'>
				<Col className='headerInfo'>
					<h3>{`${firstName} ${lastName}`}</h3>
					<h4>{business}</h4>
					<a href={webAddress} target="blank">{webAddress}</a>
					<p>{location}</p>
					{context.userinfo.voted === -1 ?
						<Button onClick={() => handleShow({ fullName: `${firstName} ${lastName}`, userId: id })}>Vote for {firstName}</Button>
						:
						//will need to update current user voted with context provider user information
						<Button variant="outline-secondary" {currentUser.voted == { arrayPosition }}>{firstName} got your vote</Button>}
				</Col>
				{/* <Col sm='auto'>
					<CloudinaryContext cloudName="makerspotlight col-1">
						<Image publicId={image} />
					</CloudinaryContext>
				</Col> */}
			</Row>
			<p>{bioText}</p>

		</Container>
	)
}

export default CandidateProfile;

