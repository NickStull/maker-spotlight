import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";

function SearchForm(props) {
  return (
    <div className={props.editToggle ? null : "vanish"}>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={props.menuState}
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
        <FormControl
          aria-describedby="basic-addon1"
          value={props.search}
          onChange={props.handleInputChange}
        />
      </InputGroup>
    </div>
  );
}

export default SearchForm;
