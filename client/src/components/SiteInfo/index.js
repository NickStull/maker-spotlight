import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';

function SiteInfo() {
  
  const { newsletterInfo, currentUser } = useAuth();
  
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      { !currentUser ?
          <div>
            <Row style={{ alignItems: "center"}}>
              <Col style={{ textAlign: "center" }}>
              <p>Featured Edge aims to connect knife artists with enthusiasts of knife artistry. </p>
              <p>Sign up or Log In to see this week's, and vote for next week's, Featured Edge.</p>
              </Col>
            </Row>
          </div>
        : <> </>
      }
    </Container>
  );
}

export default SiteInfo;
