import React from "react";
import img from "../images/me.JPG";
import "./Intro.css";

const Intro = () => {
  return (
    <div className='main-section'>
      <section className='about-me'>
        <h1>
          Hello, my name is Jared. I am a Full Stack / Blockchain / Developer
          living in Colorado Springs, CO.
        </h1>
      </section>
      <section className='photo-container'>
        <img src={img} alt='' />
      </section>
      <section className='background'>
        <h3>About:</h3>
        <p>
          I am currently working as a full stack developer for Jacobs
          Engineering making it easier for government leaders to see data that
          is aesthetically pleasing and makes it easier for them to visualize
          data. When I am not developing for Jacobs, I enjoy making website for
          small businesses, particularly for those mom-and-pop businesses that
          would be hard to find in their budget to afford a website.
        </p>
        <h3>Services:</h3>
        <p>
          Some of the services I offer are front-end development, which can help
          you realize your dream on the browser so the world can see. I can also
          provide back-end development when you need a little more complexity in
          your web site. Along with front-end and back-end development, I am a
          new blockchain developer looking to continue getting my hands dirty
          with decentralized applications, so if you have an idea, I would love
          to collaborate.
        </p>
      </section>
    </div>
  );
};

export default Intro;
