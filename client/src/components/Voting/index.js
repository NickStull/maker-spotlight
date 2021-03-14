import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import CandidateProfile from '../CandidateProfile'
import API from "../../utils/API";
import './voting.css'

const Voting = () => {

	const [votedState, setVotedState] = useState(false);
	const [candidatesState, setCandidatesState] = useState([]);

	useEffect(() => {
		console.log('CANDIDATES STATE', candidatesState);
		if (candidatesState.length === 0) {
			getCandidates()
		}
	}, [candidatesState])

	//use firebase id to get user info from mongodb
	const getCandidates = async () => {
		console.log('GET CANDIDATES CALLED');
		let dbResults;
		try {
			dbResults = await API.getCandidates();
		} catch (err) {
			console.error(err);
		} finally {
			// console.log('CANDIDATES', dbResults);
			setCandidatesState(dbResults.data);
			console.log('CANDIDATES STATE', candidatesState);
		}
	};

	return (
		<Container fluid >
			<h1>Voting Page</h1>
			{candidatesState.map((candidate, index) => {
				return <CandidateProfile
					fullName={`${candidate.firstName} ${candidate.lastName}`}
					bioText={candidate.bioText}
					key={index} />
			})}
		</Container>
	)
}

export default Voting;

