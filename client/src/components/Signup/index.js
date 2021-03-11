import React from 'react'
import ReactDom from 'react-dom'

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
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={styles.overlay} />
      <div style={styles.modal}>
        <button onClick={onClose}>Close Modal</button>
        <p>This is a modal</p>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Signup;