import React from 'react';
import { Button } from 'react-bootstrap';
import './signupTextBtn.css'

const SignupTextBtn = (props) => {

  return (
    <>
      <button className='signupText' onClick={props.showSignupModal}>
        Sign Up
      </button>
    </>
  )
}
export default SignupTextBtn;