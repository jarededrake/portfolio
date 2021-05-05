import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section className='projects-intro'>
        <h1>Here are some projects I am working on.</h1>
      </section>
      <hr />
      <section id='cfa' className='projects'></section>
      <p className='link'>
        Link:{" "}
        <a href='https://coloradofamilyaction.herokuapp.com/'>
          Colorado Family Action
        </a>{" "}
      </p>
      <p className='link'>About:</p>
      <p className='link-about'>
        This non-profit had an old and outdated website and was looking for
        someone to revamp it, I offered to help and asked if I could do it from
        scratch, they more than excited to allow me to rebuild their website
        from the bottom up. The tools I am currently using is React for the
        front end, bootstrap for styling and as I get further along I will be
        using Node.js for the backend and routes. This site is still in
        development and is looking to be in full production at the end of May
        2021.
      </p>
      <hr />
      <section className='projects'></section>
      <p className='link'>
        Link:{" "}
        <a href='https://exercise-logging-app.netlify.app/'>
          Exercise Logging App
        </a>
      </p>
      <p className='link'>About:</p>
      <p className='link-about'>
        This was my final project in order for me to graduate from my full stack
        web development course. It is a fitness tracking app that gives you the
        ability to add multiple users and exercise. It has full CRUD operations
        using Node.js for the backend and MongoDB for data management. The front
        end it built with React and Bootstrap for styling.
      </p>
      <hr />
      <section className='projects'></section>
      <p className='link'>
        Link: <a href='https://casino-dapp.herokuapp.com/'>Casino Dapp</a>
      </p>
      <p className='link'>About:</p>
      <p className='link-about'>
        This is a decentralized casino application where users are able to bet
        money for a number between 1 and 10 and if they are correct, they win a
        portion of all the ether money staked after 100 total bets. Tools used
        for this include Web3 to interact with smart contract, React for fronted
        end and Infura to test on Ropsten test net. It also includes contract
        testing using truffle.
      </p>
    </div>
  );
};

export default Projects;
