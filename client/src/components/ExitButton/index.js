import React from "react";
import "./exitbutton.css";

const ExitButton = (props) => {
  return (
    <div>
      <a class="close-container" href={props.url}>
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </a>
    </div>
  );
};
export default ExitButton;
