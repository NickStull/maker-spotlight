import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = ({ fullName, bioText }) => {

	return (
		<Container fluid >
			<h3>{fullName}</h3>
			<p>{bioText}</p>
		</Container>
	)
}

export default CandidateProfile;

