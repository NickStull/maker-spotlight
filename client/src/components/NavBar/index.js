import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar className="centered">
      <Navbar.Brand className="centered">
        🗡️ Questions? Comments? Reach out to us at featuredEdge@gmail.com 🗡️
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
