import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <form className="search">
      <div className="form-group">
        <p>Please Select:</p>
        <input type="radio" id="maker" name="type" value="maker"></input>
        <label htmlFor="maker">Maker</label>
        <br />
        <input type="radio" id="user" name="type" value="user"></input>
        <label htmlFor="user">User</label>
        <br />
        <input
          type="radio"
          id="advertiser"
          name="type"
          value="advertiser"
        ></input>
        <label htmlFor="advertiser">Advertiser</label>
        <br />
        <label htmlFor="language"></label>
        {/* <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search by Name"
          id="term"
        /> */}
        <div className="dropdown">
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
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
