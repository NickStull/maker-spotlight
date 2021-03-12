import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import './dropdown.css'
import API from "../../utils/API"
import Button from 'react-bootstrap/Button';

const HeaderDropdown = () => {

  const { currentUser } = useAuth();
  const [dropdown, setDropdownState] = useState("closed");
  const [currentUserName, setCurrentUserName] = useState();

  //check to see if user is logged in via context provider
  useEffect(() => {
    if (currentUser) {
      getUserName();
    }
  }, [currentUser])

  //use firebase id to get user info from mongodb
  const getUserName = async () => {
    // console.log('CURRENT USER', currentUser.uid);
    let dbResults;
    try {
      dbResults = await API.getUser(currentUser.uid);
    } catch (err) {
      console.error(err);
    } finally {
      setCurrentUserName(dbResults.data.firstName)
    }
  };

  function handleDropdownClick() {
    dropdown === 'closed' ?
      setDropdownState('open') :
      setDropdownState('closed');
  }

  return (
    <div className="dropdown">
      <span onClick={handleDropdownClick}>Welcome, {currentUserName}</span>
      <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}>
        <Button>Signout</Button>
        <Button>View Account Info</Button>
      </div>
    </div>
  )
}

export default HeaderDropdown;