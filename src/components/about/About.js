import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="aboutComponent d-flex flex-column ">
      <div className="above d-flex flex-column flex-md-row justify-content-md-around">
        <div className="techStack d-flex justify-content-center">
          <ul className="stacks d-flex justify-content-center flex-wrap ">
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
            <li className="stack">item</li>
          </ul>
        </div>
        <div className="education">education</div>
      </div>
      <div className="below d-flex justify-content-center">
        <div className="work">work</div>
      </div>
    </div>
  );
};

export default About;
