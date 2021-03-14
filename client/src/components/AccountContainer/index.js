import React from 'react'
import { Container } from 'react-bootstrap'
import UserAccount from '../UserAccount'

function AccountContainer() {
  return (
    <Container className="d-flex mt-4 justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <UserAccount />
      </div>
    </Container>
  )
}

export default AccountContainer
