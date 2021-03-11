import React, { useState } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import './dropdown.css'

const HeaderDropdown = () => {

  const [dropdown, setDropdownState] = useState("closed");
  const { currentUser } = useAuth()

  function handleDropdownClick() {
    dropdown === 'closed' ?
      setDropdownState('open') :
      setDropdownState('closed');
    console.log('HEADER USE AUTH', useAuth)
    console.log('HEADER AUTH PROVIDER', AuthProvider)
    console.log(currentUser)
  }

  let userResults = [{ firstName: 'Oscar' }]


  return (
    <div className="dropdown">
      <span onClick={handleDropdownClick}>Welcome, {userResults.firstName} you rascal</span>
      {/* <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}> */}
      <div className={dropdown === 'closed' ? "hide" : "dropdown-content"}>Hello World! Additional Content</div>
      {/* </div> */}
    </div>
  )
}

export default HeaderDropdown;