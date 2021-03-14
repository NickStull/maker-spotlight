import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import API from "../../utils/API";
import './candidateProfile.css'

const CandidateProfile = () => {



	return (
		<Container fluid >
			<h3>Test</h3>
			{/* <h3>{firstName}</h3> */}
		</Container>
	)
}

export default CandidateProfile;

