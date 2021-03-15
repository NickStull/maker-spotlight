import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ firstName, lastName, bioText, location, business, webAddress, id, image, vote }) => {

	return (
		<Container fluid className="profile">
			<Row fluid className='header'>
				<Col className='headerInfo'>
					<Row>
						<h3>{`${firstName} ${lastName} - `}</h3>
						<h4> {business}</h4>
					</Row>
					<a href={webAddress} target="blank">{webAddress}</a>
					<p>{location}</p>
					<Button value={id} onClick={vote()}>Vote for {firstName}</Button>
				</Col>
				<Col>
					<CloudinaryContext cloudName="makerspotlight">
						<Image publicId={image} />
					</CloudinaryContext>
				</Col>
			</Row>
			<p>{bioText}</p>

		</Container>
	)
}

export default CandidateProfile;

