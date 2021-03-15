import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import CandidateProfile from '../CandidateProfile'
import API from "../../utils/API";
import './voting.css'

const Voting = () => {

	const [votedState, setVotedState] = useState(false);
	const [votedForState, setVotedForState] = useState();
	const [candidatesInfoState, setCandidatesInfoState] = useState([]);
	const [userChoiceState, setUserChoiceState] = useState("");

	useEffect(() => {
		console.log('CANDIDATES STATE', candidatesInfoState);
		if (candidatesInfoState.length === 0) {
			getCandidates()
		}
	}, [candidatesInfoState])

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
			setCandidatesInfoState(dbResults.data);
			console.log('CANDIDATES STATE', candidatesInfoState);
		}
	};

	const vote = (event) => {
		console.log(event);
		// setUserChoiceState(event.value);
	}

	return (
		<Container fluid >
			<h2>Vote for the Next Featured Bladesmith</h2>
			<p>Select the craftsmen you would like to see featured in the next profile</p>
			{candidatesInfoState.map(({ firstName, lastName, bioText, city, state, businessName, website, _id, images }, index) => {
				return <CandidateProfile
					firstName={firstName}
					lastName={lastName}
					bioText={bioText}
					location={`${city}, ${state}`}
					business={businessName}
					webAddress={website}
					image={images[0]}
					id={_id} />
				vote = { vote }
			})}
		</Container>
	)
}

export default Voting;

