import React from "react";
import { Container, Card } from 'react-bootstrap';
import "./style.css";
import { useAuth } from '../../utils/contexts/AuthContext';
import SiteInfo from "../SiteInfo";

let featuredEdge = "Featured Edge aims to connect knife artists with enthusiasts of knife artistry." + "\n" + "Sign up or Log In to see this week's, and vote for next week's, Featured Edge."

function MakerBio() {

  const { newsletterInfo, currentUser } = useAuth();
  
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      <Card style={{ width: "900px"}}>
        <div className="row no-gutters">
          <Card.Body className="cardBody">
              <img className="card-img" style={{ maxWidth: "300px", float: "left", marginRight: "20px" }} src="https://via.placeholder.com/300" alt="maker bio" />
              <h5 className="card-title" style={{ fontSize: "30px", marginTop: "10px" }}>Featured: { newsletterInfo.firstName + " " + newsletterInfo.lastName }</h5>
              <div id="card-text" style={{ height: "250px", overflowY: "auto", scrollbarWidth: "thin", maxWidth: "100%" }}>
                <p style={{ maxWidth: "500px", wordBreak: "break-word" }}> { currentUser ?  newsletterInfo.bioText : <SiteInfo /> }
                </p>
              </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default MakerBio;
