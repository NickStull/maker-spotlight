import React, { useState, useEffect } from "react";
import { useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container, Button } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
// import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ firstName, lastName, bioText, location, business, webAddress, id, handleShow, arrayPosition }) => {

	const { userInfo } = useAuth();
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
					{userInfo.voted === arrayPosition ?
						<Button>{firstName} Has Your Vote</Button>
						:
						<></>
					}
					{userInfo.voted === -1 ?
						<Button onClick={() => handleShow({ fullName: `${firstName} ${lastName}`, userId: id, makersArrayIndex: { arrayPosition } })}>Vote for {firstName}</Button>
						:
						<></>
					}
				</Col>
			</Row>
			<p>{bioText}</p>

		</Container>
	)
}

export default CandidateProfile;

