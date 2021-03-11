import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom'
import { useAuth } from '../../utils/contexts/AuthContext'

const styles = {
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
}

const Signup = ({ open, onClose }) => {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={styles.overlay} />
      <div style={styles.modal}>
        <button onClick={onClose}>Close Modal</button>
        {error && <div>{error}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required
          />
          <button 
            disabled={loading}
            type="submit">
              Submit
            </button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Signup;