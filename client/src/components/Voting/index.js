import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/contexts/AuthContext";
import { Container, Modal, Button, Row } from "react-bootstrap";
import CandidateProfile from "../CandidateProfile";
import API from "../../utils/API";
import "./voting.css";
import ExitButton from "../ExitButton";

const Voting = () => {
  const { userInfo, updateUserInfo } = useAuth();
  // const [votedForState, setVotedForState] = useState();
  const [candidatesInfoState, setCandidatesInfoState] = useState([]);
  const [userChoiceState, setUserChoiceState] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log('current user', currentUser);
    // console.log('CANDIDATES STATE', candidatesInfoState);
    if (candidatesInfoState.length === 0) {
      getCandidates();
    }
  }, [candidatesInfoState]);

  const getCandidates = async () => {
    console.log("GET CANDIDATES CALLED");
    let dbResults;
    try {
      dbResults = await API.getCandidates();
    } catch (err) {
      console.error(err);
    } finally {
      // console.log('CANDIDATES', dbResults);
      setCandidatesInfoState(dbResults.data);
      // console.log('CANDIDATES STATE', candidatesInfoState);
    }
  };

  //modal controls
  const handleClose = () => setShow(false);

  const handleShow = (makerInfo) => {
    setUserChoiceState(makerInfo);
    setShow(true);
    console.log("selected maker", makerInfo);
  };

  const submitVote = () => {
    setShow(false);
    findMaker()
      .then(updateMakerVoteTotalsObject)
      .then(updateMakerWithNewVoteTotals)
      .then(updateUserWithVoteChoice)
      .catch((err) => console.log(err));
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
  };

  const updateMakerVoteTotalsObject = (makerInfo) => {
    let updatedCurrentVotes = makerInfo.currentVotes + 1;
    let updatedTotalVotes = makerInfo.totalVotes + 1;
    // console.log('updated current vote total', updatedCurrentVotes);
    let updatedMakerInfo = {
      ...makerInfo,
      currentVotes: updatedCurrentVotes,
      totalVotes: updatedTotalVotes,
    };
    // console.log('updated maker info', updatedMakerInfo);
    return updatedMakerInfo;
  };

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
  };

  const updateUserWithVoteChoice = async () => {
    // console.log('users choice', userChoiceState.makersArrayIndex.arrayPosition);
    let usersVoteChoice = userChoiceState.makersArrayIndex.arrayPosition;
    let updatedUserInfo = { ...userInfo, voted: usersVoteChoice };
    // console.log('user info passed to database', updatedUserInfo);
    let resultsUserInfo;
    try {
      await API.editUser(updatedUserInfo).then((results) => {
        console.log("users vote choice recorded", results);
        updateUserInfo();
        // console.log("revised user info", userInfo);
        return results.data;
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (userInfo) {
    return (
      <>
        <Container fluid>
          <h2 className="white">Candidates for the Next Feature</h2>
          {userInfo.voted === -1 ? (
            <>
              <h3 className="cream">Vote for the Next Featured Blademaker</h3>
              <p className="cream">
                Select the craftsmen you would like to see profiled next.
              </p>
            </>
          ) : (
            <h5 className="cream">
              Thanks for helping us choose the next featured craftsmen!
            </h5>
          )}
          <Row className="candidateCard">
            {candidatesInfoState.map(
              (
                {
                  firstName,
                  lastName,
                  bioText,
                  city,
                  state,
                  businessName,
                  website,
                  userId,
                  images,
                },
                index
              ) => {
                return (
                  <CandidateProfile
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
                    arrayPosition={index}
                    key={userId}
                  />
                );
              }
            )}
          </Row>
        </Container>
        {show ? (
          <Modal show={show} onHide={handleClose}>
            <ExitButton url={"/vote"} />
            <Modal.Header>
              <Modal.Title>You have made a great choice!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have chosen {userChoiceState.fullName} to be featured in the
              next spotlight.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Choose Another Bladesmith
              </Button>
              <Button variant="primary" onClick={submitVote}>
                Submit Your Vote
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default Voting;
// test
