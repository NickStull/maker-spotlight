import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
			dbResults = await API.getUsers();
		} catch (err) {
			console.error(err);
		} finally {
			console.log('ALL USERS', dbResults.data);
			setFeaturedImagesState(dbResults.data[0].images)
			// updateState();
		}
	};

	return (
		<Container fluid >

		</Container>
	)
}

export default Voting;

