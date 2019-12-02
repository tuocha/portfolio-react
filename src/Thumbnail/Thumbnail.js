import React from "react";
import "../App";
import "./style.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link} style={{color: "#01579b"}}>
        <div className="card hoverable">
          <div className="project-image card-image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="project-blurb card-content">
            <p>{props.description}</p>
          </div>
          <div className="card-action">
            {props.title}
          </div>
        </div>
        </a>
    </div>
  );
}

export default Thumbnail;
