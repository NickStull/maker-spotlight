import React, { useState, useEffect } from "react";
import { useAuth } from '../../utils/contexts/AuthContext';
import { Col, Button, Card } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
// import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ firstName, lastName, bioText, location, business, webAddress, id, handleShow, arrayPosition }) => {

	const { userInfo } = useAuth();
	const [displayModalState, setDisplayModalState] = useState(false);

	useEffect(() => {

	}, [displayModalState])

	return (

		<Col>
			<Card className="text-center">
				<Card.Header>
					<h3>{`${firstName} ${lastName}`}</h3>
					<h4>{business}</h4>
					<a href={webAddress} target="blank">{webAddress}</a>
				</Card.Header>
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text>
						{bioText}
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
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">{location}</Card.Footer>
			</Card>
		</Col>
	)
}

export default CandidateProfile;

