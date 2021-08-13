import React from "react";
import { Link } from "react-router-dom";
import photo from "../../images/amar.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <h2 className="heading">Home</h2>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src={photo} alt="" className="photo" />
          </div>
          <div className="col-sm-8">
            {" "}
            <p className="paragraph-text">
              Welcome to my portfolio site. My name is Amar Tauqeer and I am
              working as a researcher at University of Innsbruck. My research
              area includes semantic web, knowledg graph, ontologies, SPARQL
              etc. Currently, I am working on{"  "}
              <a href="https://smashhit.eu/" target="_blank" rel="noreferrer">
                SamshHit
              </a>
              {"  "}
              project , where I am responsible to create semantic models for
              contracts and license. Traditionally, I am a software developer
              and had been working for many years. I worked in different
              programming languages such as Python, Django, Flask, JavaScript,
              React, Node, Express and C#. I also experience in different
              database management systems like Oracle 10G, MSSQL server, MySql
              and MongoDB. For further information about me please visit{" "}
              <Link to="/about">About</Link>, and for portfolio visit{" "}
              <Link to="/portfolio">Portfolio</Link> page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
