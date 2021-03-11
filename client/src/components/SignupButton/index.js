<<<<<<< Updated upstream
import { useState } from 'react'
import Signup from '../Signup'

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Sign Up</button>
      <Signup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {

  return (
      <div>
        <button>
          <Link to='/signup'>
            Sign Up
          </Link>
        </button>
      </div>
>>>>>>> Stashed changes
  )
}

export default SignupButton;