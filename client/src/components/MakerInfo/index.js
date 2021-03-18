import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./style.css";
import { useAuth } from '../../utils/contexts/AuthContext';

function MakerInfo() {
  
  const { newsletterInfo, currentUser } = useAuth();

  let websiteText;
  
  if (newsletterInfo !== {}) {
    websiteText = newsletterInfo.website.includes("https://www.") 
      ? newsletterInfo.website.replace("https://www.","") 
      : newsletterInfo.website.replace("http://www.","");
  }

  return (
    <Container fluid className='containerFluid mt-4 connected'>
      { currentUser ?
        <Card style={{ width: "900px", marginBottom: "20px" }}>
          <Card.Header style={{ fontSize: "30px", textAlign: "center"}}>{ newsletterInfo.businessName === "" ? newsletterInfo.firstName + " " + newsletterInfo.lastName : newsletterInfo.businessName }</Card.Header>
          <div className="row no-gutters">
            <Card.Body>
              <Row style={{ marginTop: "5px" }}>
                <Col sm={12} md={6}>
                <h6><a className="infoText" href={ newsletterInfo.website } target="_blank">{ websiteText }</a></h6>
                </Col> 
                <Col sm={12} md={6}>
                <h6 className="infoText card-title-right">{ newsletterInfo.email }</h6>
                </Col>
              </Row>
              <Row style={{ marginTop: "5px" }}>
                { newsletterInfo.phoneNumber === "" 
                  ? 
                    <Col>
                      <h6 className="card-title infoText" >{ newsletterInfo.city }, { newsletterInfo.state } </h6>
                    </Col> 
                  :
                    <>
                      <Col sm={12} md={6}>
                        <h6>Phone: { newsletterInfo.phoneNumber }</h6>
                      </Col>
                      <Col sm={12} md={6}>
                        <h6 className="card-title-right infoText" >{ newsletterInfo.city }, { newsletterInfo.state } </h6>
                      </Col>
                    </>
                }
                
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
