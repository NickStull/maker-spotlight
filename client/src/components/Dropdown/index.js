import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/contexts/AuthContext";
import "./dropdown.css";
import API from "../../utils/API";
import { DropdownButton, Dropdown } from "react-bootstrap"
import Logout from "../Logout";

const HeaderDropdown = () => {
  const { userInfo, currentUser } = useAuth();
  const [currentUserName, setCurrentUserName] = useState();

  //check to see if user is logged in via context provider
  useEffect(() => {
    // if (currentUser) {
    //   getUserName();
    // }
  }, [userInfo]);

  //use firebase id to get user info from mongodb
  // const getUserName = async () => {
  //   let dbResults;
  //   try {
  //     dbResults = await API.getUser(currentUser.uid);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setCurrentUserName(dbResults.data.firstName);
  //   }
  // };

  return (
    <>
      {console.log(userInfo)}
      {userInfo ?
        <DropdownButton className="dropdown" id="dropdown-basic-button" title={`Welcome, ${userInfo.firstName}!`}>
          <Dropdown.Item href="/account">Edit Account</Dropdown.Item>
          <Logout />
        </DropdownButton >
        : <>{console.log(userInfo)}</>
      }
    </>
  );

}

export default HeaderDropdown;

{/* <Dropdown.Item href="/logout">Log out</Dropdown.Item> */ }

