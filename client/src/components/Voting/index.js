import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Carousel, Row, Col, Container } from 'react-bootstrap/Carousel';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import API from "../../utils/API";
import './voting.css'

const Voting = () => {

	const [featuredImagesState, setFeaturedImagesState] = useState([testImage1]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		getUserInfo();
	}, [])

	//use firebase id to get user info from mongodb
	const getUserInfo = async () => {
		let dbResults;
		try {
			dbResults = await API.getCandidates();
		} catch (err) {
			console.error(err);
		} finally {
			console.log('CANDIDATES', dbResults);
			setFeaturedImagesState(dbResults.data[0].images)
		}
	};

	return (
		<Container fluid >

		</Container>
	)
}

export default Voting;

