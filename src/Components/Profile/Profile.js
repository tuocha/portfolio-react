import React from "react";
import "./style.css"

function Profile(props) {
  return (
    <div className="body-text">
      <h1>About</h1>
      <img src="images/profile_image.jpg" alt="cody ballard" id="profile-pic"/>
      <p className="flow-text">
        <h4>name | cody ballard</h4>
        <h4>location | philadelphia, PA</h4>
        <br></br>
        I am a full stack web developer who recently graduated from an intensive coding bootcamp.
        While I enjoyed learning each taught subject, the front-end,
        design-oriented technologies captured my interest the most. 
        <br></br><br></br>
        Skills include: MERN, HTML, CSS, React, Handlebars, Material UI, Bootstrap,
        Materialize, JavaScript, jQuery, GIT, Github, Node, Express, Firebase,
        Mongo, Mongoose, MySQL, Sequelize, Media Queries, APIs, JSON, REST, AJAX
      </p>
    </div>
  );
}

export default Profile;
