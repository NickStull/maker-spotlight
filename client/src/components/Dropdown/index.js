import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import './dropdown.css'
import API from "../../utils/API"

const HeaderDropdown = () => {

  const { currentUser } = useAuth();
  const [dropdown, setDropdownState] = useState("closed");
  const [currentUserName, setCurrentUserName] = useState();

  // setTimeout(API.getUser(currentUser.uid).then(response => console.log('RESPONSE', response)), 2000)
  console.log("USER AUTH", currentUser);
  //test
  // useEffect(() => {
  //   if (currentUser) {
  //     waitForUserToLoad()
  //   }
  // }, []);

  // async function waitForUserToLoad() {
  //   var userFirebaseInfo = await useAuth();
  //   console.log(userFirebaseInfo);
  //   return userFirebaseInfo;
  // }

  // waitForUserToLoad();

  useEffect(() => {
    console.log("useEffect running")
    if (currentUser) {
      // console.log("user is true, running async function");
      runFunction();
    }
  }, [currentUser])

  const runFunction = async () => {
    //fetching data
    console.log('CURRENT USER', currentUser.uid);
    let data = await API.getUser(currentUser.uid).then(userDbInfo => console.log(userDbInfo)).catch(err => console.log(err));
    console.log('DB INFO RETURNED TO DROPDOWN ', data);
    //setState
    // setState()
  };

  // let waitForUserToLoad = async () => { return "Hello" };

  // waitForUserToLoad()
  //   .then(userFirebaseInfo => API.getUser(userFirebaseInfo.uid))
  //   .then(userDbInfo => {
  //     console.log('CURRENT USER RESULTS ', userDbInfo);
  //     // setCurrentUserName(results);
  //   }
  //   )
  //   .catch(err => console.log(err));


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
      <span onClick={handleDropdownClick}>Welcome, you rascal</span>
      {/* <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}> */}
      <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}>Hello World! Additional Content</div>
      {/* </div> */}
    </div>
  )
}


export default HeaderDropdown;