import React from "react";
import "../../node_modules/@fortawesome/fontawesome-free/js/brands";
import "../../node_modules/@fortawesome/fontawesome-free/js/solid.js";
import "../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <footer>
        <hr />
        <div className='icons'>
          <h3 className='connect-with-me'>Connect With Me</h3>
          <span className='github-icon'>
            <a href='https://github.com/jarededrake'>
              <i class='fab fa-github fa-3x'></i>
            </a>
          </span>
          <span>
            <a href='https://www.linkedin.com/in/jared-drake-133209188/'>
              <i class='fab fa-linkedin-in fa-3x'></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
