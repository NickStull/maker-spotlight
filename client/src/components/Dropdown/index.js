import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/contexts/AuthContext";
import "./dropdown.css";
import API from "../../utils/API";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Logout from "../Logout";

const HeaderDropdown = () => {
  const { userInfo } = useAuth();

  useEffect(() => {
  }, [userInfo]);

  return (
    <>
      {/* {console.log(userInfo)} */}
      {userInfo && !userInfo.admin ? (
        <DropdownButton
          className="dropdown"
          id="dropdown-basic-button"
          title={`Welcome, ${userInfo.firstName}!`}
        >
          <Dropdown.Item href="/account">Edit Account</Dropdown.Item>
          <Logout />
        </DropdownButton>
      ) : userInfo && userInfo.admin ? (
        <DropdownButton
          className="dropdown"
          id="dropdown-basic-button"
          title={`Welcome, ${userInfo.firstName}!`}
        >
          <Dropdown.Item href="/account">Edit Account</Dropdown.Item>
          <Dropdown.Item href="/admin">Admin</Dropdown.Item>
          <Logout />
        </DropdownButton>
      ) : (
        <>{console.log(userInfo)}</>
      )}
    </>
  );
};

export default HeaderDropdown;

{
  /* <Dropdown.Item href="/logout">Log out</Dropdown.Item> */
}
