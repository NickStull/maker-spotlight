import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext';
import "./style.css";

function SiteInfo() {

  const { newsletterInfo, currentUser } = useAuth();

  return (
    <Container fluid className='containerFluid mt-4 connected'>
      { !currentUser ?
        <Card style={{ width: "700px" }}>
          <div className="row no-gutters">
            <Card.Body className="cardBody" style={{ maxWidth: "700px", overflowY: "auto" }}>
              <Row style={{ alignItems: "center" }}>
                <Col style={{ textAlign: "center" }}>
                  <img className="bioPicture" src={newsletterInfo.bioPicture} alt="maker bio" />
                  <h5 className="card-title" style={{ fontSize: "30px", marginTop: "10px" }}>Featured: {newsletterInfo.firstName + " " + newsletterInfo.lastName}</h5>
                  <div style={{ marginTop: "40px" }}>
                    <p>The Featured Edge is a place where blade enthusiasts can discover and connect with the knife makers that share their passion. Each month a new cutler is featured with detailed images and descriptions of their work, providing a unique opportunity to be introduced to their well honed craft. </p>
                    <p>As a member, you will have the opportunity to vote and help choose who will appear as the next month’s featured knife maker. And if you would like to share your knife making skills with the rest of the community, you can elect to be considered as a candidate for a future featured spot. </p>
                    <p>If you love knives and are always searching for new makers and their custom creations, sign-up is free. You are only a click away from discovering The Featured Edge!</p>
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
