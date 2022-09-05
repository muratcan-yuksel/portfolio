import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="aboutComponent   ">
      <div className="aboutWrapper d-flex flex-column-reverse flex-md-column">
        <div className="above d-flex flex-column flex-md-row justify-content-md-around">
          <div className="techStack d-flex justify-content-center">
            <ul className="stacks d-flex justify-content-center flex-wrap ">
              <li className="stack">HTML</li>
              <li className="stack">CSS</li>
              <li className="stack">Javascript</li>
              <li className="stack">ReactJs</li>
              <li className="stack">VueJs</li>
              <li className="stack">Solidity</li>
              <li className="stack">Hardhat</li>
              <li className="stack">EthersJs</li>
              <li className="stack">Jest</li>
              <li className="stack">Mocha</li>
              <li className="stack">React Testing Library</li>
              <li className="stack">Git</li>
              <li className="stack">MongoDB</li>
              <li className="stack">Bootstrap</li>
            </ul>
          </div>
          <div className="education">education</div>
        </div>
        <div className="below d-flex justify-content-center">
          <div className="work">work</div>
        </div>
      </div>
    </div>
  );
};

export default About;
