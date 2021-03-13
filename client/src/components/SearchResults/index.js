import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2 onClick={props.userOnClick} id={props.id}>
          {props.title}
        </h2>
      </li>
    </ul>
  );
}

export default SearchResults;
