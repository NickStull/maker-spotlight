import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col, } from 'react-bootstrap'
import { useAuth } from "../../utils/contexts/AuthContext";
import HeaderDropdown from "../Dropdown";
import Login from "../Login";
import Signup from "../Signup";
import "./header.css";
import API from "../../utils/API";

const Header = () => {
  const [loggedInState, setLoggedInState] = useState(false);
  const { currentUser, logout, userInfo } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  //check to see if user is logged in via context provider
  useEffect(() => {
    if (currentUser) {
      setLoggedInState(true);
      console.log("we fo sho logged in");
      getUserName();
    }
  }, []);

  const getUserName = async () => {
    // console.log('CURRENT USER', currentUser.uid);
    let dbResults;
    try {
      dbResults = await API.getUser(currentUser.uid);
    } catch (err) {
      console.error(err);
    } finally {
      // console.log("isAdmin: ", dbResults.data.admin);
      setIsAdmin(dbResults.data.admin);
    }
  };

  return (
    <>
      <Container id="pageHeader">
        <Row className="noPaddingNoMargin">
          <Col className="noPaddingNoMargin">
            <a href="/" className="logo">
              <h3 className="logo noPaddingNoMargin">Featured Edge</h3>
              <h5 id='tagLine'>Find Your Next Obsession</h5>
            </a>
          </Col>
          {/* display dropdown button based on loggedInState */}
          {loggedInState ? (
            <Col sm='auto' className="noPaddingNoMargin">
              <Link to='/vote' className=
                {userInfo.voted === -1 ?
                  'voteBtn notVoted'
                  : 'voteBtn voted'
                }
              >
                {userInfo.voted === -1 ?
                  'VOTE'
                  : 'VOTED'
                }
              </Link>
              <HeaderDropdown />
            </Col>
          ) : (
            <>
              <Col sm="auto" className="noPaddingNoMargin">
                <Signup className="noPaddingNoMargin" />
              </Col>
              <Col sm="auto" className="noPaddingNoMargin">
                <Login className="noPaddingNoMargin" />
              </Col>
            </>
          )}
        </Row >
      </Container>
    </>
  );
};

export default Header;
