import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
// import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // console.log("prop.result ", props.result);
  // const [maker, setMaker] = useState(false);
  // const [user, setUser] = useState(false);
  // const [advertiser, setAdvertiser] = useState(false);
  // const [search, setSearch] = useState({});

  // useEffect(() => {

  //   // API.searchTerms(search)
  //   //   .then((res) => {
  //   //     if (res.data.length === 0) {
  //   //       throw new Error("No results found.");
  //   //     }
  //   //     if (res.data.status === "error") {
  //   //       throw new Error(res.data.message);
  //   //     }
  //   //     setTitle(res.data[1][0]);
  //   //     setUrl(res.data[3][0]);
  //   //   })
  //   //   .catch((err) => setError(err));
  // }, [maker, user, advertiser, search]);

  // const handleInputChange = (event) => {
  //   setMaker(document.getElementById("maker").checked);
  //   setUser(document.getElementById("user").checked);
  //   setAdvertiser(document.getElementById("advertiser").checked);
  // };

  return (
    <form className="search">
      <div className="form-group">
        <p>Please Select:</p>
        <input
          onChange={props.handleRadioButton}
          type="radio"
          id="maker"
          name="type"
          value="maker"
        ></input>
        <label htmlFor="maker">Maker</label>
        <br />
        <input
          onChange={props.handleRadioButton}
          type="radio"
          id="user"
          name="type"
          value="user"
        ></input>
        <label htmlFor="user">User</label>
        <br />
        <input
          onChange={props.handleRadioButton}
          type="radio"
          id="advertiser"
          name="type"
          value="advertiser"
        ></input>
        <label htmlFor="advertiser">Advertiser</label>
        <br />
        <label htmlFor="language"></label>
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
