import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import "./style.css";

function MakerInfo() {

  const [user, setUser] = useState({});

  useEffect(() => {
    if (JSON.stringify(user) === '{}') {
      getInfo();
    }
  }, []);

  const getInfo = async () => {
    let dbResults;
    try {
      dbResults = await API.getUser("u5irgyagz7YT5m77Zsx8Mb51Ngs2");
    } catch (err) {
      console.error(err);
    } finally {
      setUser(dbResults.data);
    }
  };
  
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      <Card style={{ width: "900px", marginBottom: "20px" }}>
        <Card.Header style={{ fontSize: "30px", textAlign: "center"}}>Business Name</Card.Header>
        <div className="row no-gutters">
          <Card.Body>
            <Row style={{ alignItems: "center", marginTop: "5px" }}>
              <Col sm={12} md={6}>
               <h5>www.knifeknifeknife.com</h5>
              </Col>
              <Col sm={12} md={6}>
               <h5 className="card-title-right">Email: knifeknife@knife.com</h5>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col sm={12} md={6}>
               <h5>Phone: 555-555-5555</h5>
              </Col>
              <Col sm={12} md={6}>
               <h5 className="card-title-right">Address: 1234 Cutty Corner</h5>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col></Col>
              <Col sm={12} md={6}>
               <h5 className="card-title-right" >Stabby City, West Virginia 55485</h5>
              </Col>
            </Row>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default MakerInfo;
