import React, { useRef } from "react";
import { Container, Form, Card, Button } from 'react-bootstrap';
import API from "../../utils/API";
import "./style.css";

function MakerBio() {
  
  
  // function getInfo() {
  //   console.log(userEdit);
  //   API.getUser(userEdit)
  //     .then(
  //       results => {
  //         props.setEditToggle(true);
  //         // props.setSearch("");
  //         // console.log(results);
  //       }
  //     )
  //     .catch(err => console.log(err));
  // }
  // .about-me {
  //   float: left;
  //   margin: 5px 15px 5px 0px;
  //   width: 200px;
  //   height: 200px;
  // }
  return (
    <Container fluid className='containerFluid mt-4 connected'>
      <Card style={{ width: "900px"}}>
        <div className="row no-gutters">
          <Card.Body className="cardBody">
              <img className="card-img" style={{ maxWidth: "300px", float: "left", marginRight: "20px" }} src="https://via.placeholder.com/300" alt="maker bio" />
              <h5 className="card-title" style={{ fontSize: "30px", marginTop: "10px" }}>Maker Name</h5>
              <div id="card-text" style={{ height: "250px", overflowY: "auto", scrollbarWidth: "thin", maxWidth: "100%" }}>
                <p style={{ maxWidth: "500px", wordBreak: "break-word" }}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
              </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default MakerBio;
