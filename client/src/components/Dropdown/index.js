import React, { useState } from "react";
import './dropdown.css'

const HeaderDropdown = () => {

	const [dropdown, setDropdownState] = useState("closed");

	function handleDropdownClick() {
		dropdown === 'closed' ?
			setDropdownState('open') :
			setDropdownState('closed');
		alert('working');
	}


	return (
		<div className="dropdown">
			<span onClick={handleDropdownClick}>Mouse over me</span>
			<div className={dropdown === 'closed' ? "dropdown-content" : "dropdown-content show"}>
				<p>Hello World! <br></br>Additional Content</p>
			</div>
		</div>
	)
}

export default HeaderDropdown;