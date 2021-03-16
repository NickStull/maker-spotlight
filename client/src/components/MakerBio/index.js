import React, { useEffect, useState } from "react";
import { Container, Card } from 'react-bootstrap';
import API from "../../utils/API";
import "./style.css";

function MakerBio() {

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
      <Card style={{ width: "900px"}}>
        <div className="row no-gutters">
          <Card.Body className="cardBody">
              <img className="card-img" style={{ maxWidth: "300px", float: "left", marginRight: "20px" }} src="https://via.placeholder.com/300" alt="maker bio" />
              <h5 className="card-title" style={{ fontSize: "30px", marginTop: "10px" }}>{ user.firstName + " " + user.lastName }</h5>
              <div id="card-text" style={{ height: "250px", overflowY: "auto", scrollbarWidth: "thin", maxWidth: "100%" }}>
                <p style={{ maxWidth: "500px", wordBreak: "break-word" }}> { user.bioText } </p>
              </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default MakerBio;
