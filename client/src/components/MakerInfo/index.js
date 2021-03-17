import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./style.css";
import { useAuth } from '../../utils/contexts/AuthContext';

function MakerInfo() {
  
  const { newsletterInfo, currentUser } = useAuth();
  
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      { currentUser ?
        <Card style={{ width: "900px", marginBottom: "20px" }}>
          <Card.Header style={{ fontSize: "30px", textAlign: "center"}}>{ newsletterInfo.businessName }</Card.Header>
          <div className="row no-gutters">
            <Card.Body>
              <Row style={{ alignItems: "center", marginTop: "5px" }}>
                <Col sm={12} md={6}>
                <h5>{ newsletterInfo.website }</h5>
                </Col>
                <Col sm={12} md={6}>
                <h5 className="card-title-right">Email: { newsletterInfo.email }</h5>
                </Col>
              </Row>
              <Row style={{ marginTop: "5px" }}>
                <Col sm={12} md={6}>
                <h5>Phone: { newsletterInfo.phoneNumber }</h5>
                </Col>
                <Col sm={12} md={6}>
                <h5 className="card-title-right">Address: { newsletterInfo.address }</h5>
                </Col>
              </Row>
              <Row style={{ marginTop: "5px" }}>
                <Col></Col>
                <Col sm={12} md={6}>
                <h5 className="card-title-right" >{ newsletterInfo.city }, { newsletterInfo.state } { newsletterInfo.zipCode }</h5>
                </Col>
              </Row>
            </Card.Body>
          </div>
        </Card>
        : <> </>
      }
    </Container>
  );
}

export default MakerInfo;
