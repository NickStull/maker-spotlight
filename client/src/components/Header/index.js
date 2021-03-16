import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../../utils/contexts/AuthContext";
import HeaderDropdown from "../Dropdown";
import Login from "../Login";
import Signup from "../Signup";
import "./header.css";
import API from "../../utils/API";
import AdminButton from "../AdminButton";

const Header = () => {
  const [loggedInState, setLoggedInState] = useState(false);
  const { currentUser, logout } = useAuth();
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
      {console.log("current user", currentUser)}
      <header className="pageHeader">
        <a href="/" className="logo">
          <h3 className="logo">Bladesmith Spotlight</h3>
          Discover Your Next Obsession
        </a>
        {/* display dropdown button based on loggedInState */}
        {loggedInState ? (
          isAdmin ? (
            <>
              <AdminButton />
              <HeaderDropdown />
            </>
          ) : (
            <HeaderDropdown />
          )
        ) : (
          <>
            <Signup />
            <Login />
          </>
        )}
      </header>
    </>
  );
};

export default Header;
