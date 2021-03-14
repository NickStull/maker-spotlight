import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import Container from "../../components/Container";
// import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";

function SearchForm(props) {
  return (
    <>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item onClick={props.handleRadioButton} id="user">
            Users
          </Dropdown.Item>
          <Dropdown.Item onClick={props.handleRadioButton} id="maker">
            Makers
          </Dropdown.Item>
          <Dropdown.Item onClick={props.handleRadioButton} id="advertiser">
            Advertisers
          </Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>

      <form className={props.editToggle ? "search" : "vanish search"}>
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="term"
            list="term"
            type="text"
            className="form-control"
            placeholder="Search by Name"
            id="term"
          />
        </div>
      </form>
    </>
  );
}

export default SearchForm;

{
  /* <div className="dropdown">
          <button onClick={myFunction} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content show">
            <input
              type="text"
              placeholder="Search.."
              id="myInput"
              onKeyUp={filterFunction}
            />
            <a href="#about">About</a>
            <a href="#base">Base</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#custom">Custom</a>
            <a href="#support">Support</a>
            <a href="#tools">Tools</a>
          </div>
        </div> */
}
