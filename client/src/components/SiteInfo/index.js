import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';

function SiteInfo() {
  
  const { newsletterInfo, currentUser } = useAuth();
  
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      { !currentUser ?
        <Card style={{ width: "700px"}}>
          <div className="row no-gutters">
            <Card.Body className="cardBody">
              <Row style={{ alignItems: "center" }}>
                <Col style={{ textAlign: "center" }}>
                  <img style={{ maxWidth: "250px"}} src={ newsletterInfo.bioPicture } alt="maker bio" />
                  <h5 className="card-title" style={{ fontSize: "30px", marginTop: "10px" }}>Featured: { newsletterInfo.firstName + " " + newsletterInfo.lastName }</h5>
                  <div style={{ marginTop: "40px" }}>
                    <p>Featured Edge aims to connect knife artists with enthusiasts of knife artistry.</p>
                    <p>Sign up or Log In to see this week's, and vote for next week's, Featured Edge.</p>
                  </div>
                </Col>  
              </Row>  
            </Card.Body>
          </div>
        </Card>

          // <div>
          //   <Row style={{ alignItems: "center"}}>
          //     <Col style={{ textAlign: "center" }}>
          //     <p>Featured Edge aims to connect knife artists with enthusiasts of knife artistry. </p>
          //     <p>Sign up or Log In to see this week's, and vote for next week's, Featured Edge.</p>
          //     </Col>
          //   </Row>
          // </div>
        : <> </>
      }
    </Container>
  );
}

export default SiteInfo;
