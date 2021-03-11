import React, { useState } from "react";
import './dropdown.css'

const HeaderDropdown = () => {

	const [dropdown, setDropdownState] = useState("closed");

	function handleDropdownClick() {
		dropdown === 'closed' ?
			setDropdownState('open') :
			setDropdownState('closed');
	}


	return (
		<div className="dropdown">
			<span onClick={handleDropdownClick}>Click here to open</span>
			{/* <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}> */}
			<div className={dropdown === 'closed' ? "hide" : "dropdown-content"}>Hello World! Additional Content</div>
			{/* </div> */}
		</div>
	)
}

export default HeaderDropdown;