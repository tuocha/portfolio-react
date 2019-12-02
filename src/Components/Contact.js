import React from "react";
import Chip from "../Chip/Chip";

function Contact(props) {
  return (
    <div>
      <h2>Contact</h2>
      <h5>phone | (470) 242-9976</h5>
      <h5>email | <a href="mailto:kippon47@gmail.com">kippon47@gmail.com</a></h5>

      <div className="contact-load">
        <Chip
          link="https://www.instagram.com/age_of_agaricus/"
          image="/images/ig_logo.jpg"
          title="Instagram"
        />
        <Chip
          link="https://github.com/tuocha"
          image="/images/github-logo.png"
          title="Github"
        />
        <Chip
          link="https://www.linkedin.com/in/cody-ballard-474b10182/"
          image="/images/linkedin-logo.png"
          title="linkedIn"
        />
        <Chip
          link="https://docs.google.com/document/d/1t3vCH6JRz_Ti0kxbtcYFsNrDg23nmSDWeHNprxHkDpM/edit?usp=sharing"
          image="/images/r-helvetica.jpg"
          title="Resume"
        />

      </div>
    </div>
  );
}

export default Contact;
