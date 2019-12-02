import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-load">
        <Thumbnail
          link="https://neat-drinks.herokuapp.com/"
          image="/images/neat-Logo.png"
          title="Neat Drinks"
          description="A cocktail app that lets you search drinks bars have uploaded. Cheers!"
        />
        <Thumbnail
          link="https://salty-everglades-74905.herokuapp.com/"
          image="/images/32117.png"
          title="Clicky"
          description="Fun browser game studying React"
        />
        <Thumbnail
          link="https://tuocha.github.io/ROOKY/"
          image="/images/Rooky-logo.png"
          title="Rooky"
          description="A job search and networking app for web developers"
        />
        <Thumbnail
          link="https://tuocha.github.io/trivia_game/"
          image="/images/GOT.png"
          title="Valar Morghulis"
          description="Answer questions about everyone's favorite TV show"
        />
        <Thumbnail
          link="https://tuocha.github.io/train-scheduler/"
          image="/images/train-icon.jpg"
          title="Train Scheduler"
          description="Schedule app that studies persistent data"
        />
      </div>
    </div>
  );
}

export default Projects;
