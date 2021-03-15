import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/contexts/AuthContext";
// import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext';
import { Container, Modal, Button } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation, Placeholder } from 'cloudinary-react';
import CandidateProfile from '../CandidateProfile'
import API from "../../utils/API";
import './voting.css'

const Voting = () => {

	const { currentUser } = useAuth();
	const [votedState, setVotedState] = useState(false);
	const [votedForState, setVotedForState] = useState();
	const [candidatesInfoState, setCandidatesInfoState] = useState([]);
	const [userChoiceState, setUserChoiceState] = useState();
	const [show, setShow] = useState(false);

	useEffect(() => {
		console.log('current user', currentUser);
		console.log('CANDIDATES STATE', candidatesInfoState);
		if (candidatesInfoState.length === 0) {
			getCandidates()
			findUserInfo()
		}
	}, [candidatesInfoState])

	const handleClose = () => setShow(false);

	const findUserInfo = async () => {
		let userInfo;
		userInfo = await API.getUser()

	}

	const submitVote = () => {
		setShow(false);
		findMaker()
			.then(updateMakerVoteTotals)
			.then(updateMakerWithNewVoteTotals)
		//make API call to update maker with vote using key from userChoiceState
	};

	const findMaker = async () => {
		let makerInfoResults;
		try {
			makerInfoResults = await API.getUser(userChoiceState.userId);
		} catch (err) {
			console.error(err);
		} finally {
			// console.log('maker info', makerInfo);
			let makerInfo = makerInfoResults.data;
			return makerInfo;
		}
	}
	const updateMakerVoteTotals = (makerInfo) => {
		let updatedCurrentVotes = makerInfo.currentVotes + 1;
		let updatedTotalVotes = makerInfo.totalVotes + 1;
		console.log('updated current vote total', updatedCurrentVotes);
		let updatedMakerInfo = {
			...makerInfo,
			currentVotes: updatedCurrentVotes,
			totalVotes: updatedTotalVotes
		}
		console.log('updated maker info', updatedMakerInfo);
		return updatedMakerInfo;
	}

	const updateMakerWithNewVoteTotals = async (updatedMakerInfo) => {
		// console.log('updating vote totals');
		let makerVotedFor;
		try {
			makerVotedFor = await API.editUser(updatedMakerInfo);
		} catch (err) {
			console.error(err);
		} finally {
			return makerVotedFor;
		}
	}

	const changeUserStatusToHasVoted = async () => { }

	// const updateVoteTotals = async () => {
	// 	let makerId =
	// 		let dbResults;
	// 	try {
	// 		dbResults = await API.editUser(makerId);
	// 	} catch (err) {
	// 		console.error(err);
	// 	} finally {
	// 		setCurrentUserName(dbResults.data.firstName);
	// 	}
	// };

	const handleShow = (makerInfo) => {
		setUserChoiceState(makerInfo);
		setShow(true);
		console.log('selected maker', makerInfo);
	};

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
				{candidatesInfoState.map(({ firstName, lastName, bioText, city, state, businessName, website, userId, images }) => {
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
						id={userId}
						key={userId} />
				})}
			</Container>
			{show ?
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>You have chosen {userChoiceState.fullName} to be featured in the next spotlight.</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Choose Another Bladesmith
          </Button>
						<Button variant="primary" onClick={submitVote}>
							Submit Your Vote
          </Button>
					</Modal.Footer>
				</Modal>
				: <></>
			}
		</>
	)
}

export default Voting;

