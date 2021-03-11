import { useState } from 'react'
import Signup from '../Signup'

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <div>
        <button onClick={() => setIsOpen(true)}>Sign Up</button>
        <Signup open={isOpen} onClose={() => setIsOpen(false)}/>
      </div>
  )
}

export default SignupButton;