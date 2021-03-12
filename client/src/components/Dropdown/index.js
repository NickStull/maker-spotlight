import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import './dropdown.css'
import API from "../../utils/API"

const HeaderDropdown = () => {

  const { currentUser } = useAuth();
  const [dropdown, setDropdownState] = useState("closed");
  const [currentUserName, setCurrentUserName] = useState();


  useEffect(() => {
    // console.log("useEffect running")
    if (currentUser) {
      runFunction();
    }
  }, [currentUser])

  const runFunction = async () => {
    //fetching data
    console.log('CURRENT USER', currentUser.uid);
    let dbResults;
    try {
      dbResults = await API.getUser(currentUser.uid);
    } catch (err) {
      console.error(err);
    } finally {
      // console.log('db results', dbResults);
      setCurrentUserName(dbResults.data.firstName)
    }
  };

  function handleDropdownClick() {
    dropdown === 'closed' ?
      setDropdownState('open') :
      setDropdownState('closed');
    // console.log('HEADER USE AUTH', useAuth)
    // console.log('HEADER AUTH PROVIDER', AuthProvider)
    console.log(currentUser)
  }

  return (
    <div className="dropdown">
      <span onClick={handleDropdownClick}>Welcome, {currentUserName}</span>
      {/* <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}> */}
      <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}>
        <button>Signout</button>
        <button>View Account Info</button>
      </div>
      {/* </div> */}
    </div>
  )
}


export default HeaderDropdown;