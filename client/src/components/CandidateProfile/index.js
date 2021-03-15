import React, { useState, useEffect } from "react";
// import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container, Button } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
// import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ firstName, lastName, bioText, location, business, webAddress, id, handleShow }) => {

	const [displayModalState, setDisplayModalState] = useState(false);

	useEffect(() => {

	}, [displayModalState])

	const findMaker = (makerId) => {
		console.log('MAKER ID', makerId);

		// setUserChoiceState(event.value);
	}

	return (
		<Container fluid className="profile">
			<Row fluid className='header'>
				<Col className='headerInfo'>
					<h3>{`${firstName} ${lastName}`}</h3>
					<h4>{business}</h4>
					<a href={webAddress} target="blank">{webAddress}</a>
					<p>{location}</p>
					{/* <Button onClick={() => vote(id)}>Vote for {firstName}</Button> */}
					<Button onClick={() => handleShow({ fullName: `${firstName} ${lastName}`, userId: id })}>Vote for {firstName}</Button>
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

