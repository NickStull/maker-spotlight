import React, { useState, useEffect } from "react";
// import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import CandidateProfile from '../CandidateProfile'
import API from "../../utils/API";
import './voting.css'

const Voting = () => {

	const [votedState, setVotedState] = useState(false);
	const [votedForState, setVotedForState] = useState();
	const [candidatesInfoState, setCandidatesInfoState] = useState([]);
	const [userChoiceState, setUserChoiceState] = useState();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const submitVote = () => {
		setShow(false);
		//make API call to update maker with vote using key from userChoiceState
	};

	const voteForMaker = async () => {
		// console.log('CURRENT USER', currentUser.uid);
		let makerId = userChoiceState
		let dbResults;
		try {
			dbResults = await API.updateUser(makerId);
		} catch (err) {
			console.error(err);
		} finally {
			// console.log(dbResults);
			// setCurrentUserName(dbResults.data.firstName);
		}
	};

	const handleShow = (makerInfo) => {
		setUserChoiceState(makerInfo);
		setShow(true);
	};

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

	// const vote = (event) => {
	// 	console.log('voting event', event);
	// 	setUserChoiceState(event.value);
	// }

	return (
		<>
			<Container fluid >
				<h2>Vote for the Next Featured Bladesmith</h2>
				<p>Select the craftsmen you would like to see featured in the next profile</p>
				{candidatesInfoState.map(({ firstName, lastName, bioText, city, state, businessName, website, _id, images }) => {
					return <CandidateProfile
						firstName={firstName}
						lastName={lastName}
						bioText={bioText}
						location={`${city}, ${state}`}
						business={businessName}
						webAddress={website}
						image={images[0]}
						// vote={vote}
						handleShow={handleShow}
						setUserChoiceState={setUserChoiceState}
						key={_id} />

				})}
			</Container>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>You have chosen {userChoiceState} to be featured in the next spotlight.</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Choose Another Bladesmith
          </Button>
					<Button variant="primary" onClick={submitVote}>
						Submit Your Vote
          </Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Voting;

