import React from "react";
import "../App";
import "./style.css";

function Thumbnail(props) {
  return (
    <div className="chip-div">
      <a href={props.link}>
        <div class="chip">
          <img src={props.image} alt={props.title} />
          {props.title}
        </div>
      </a>
    </div>
  );
}

export default Thumbnail;
