import React from "react";
import "./about.css";
import ethersLogo from "../../assets/icons/ethers-seeklogo.com.svg";
import mochaLogo from "../../assets/icons/mocha-seeklogo.com.svg";
import bootstrapLogo from "../../assets/icons/bootstrap-seeklogo.com.svg";
// !!! need html, css and maybe mongoose icon in svg format
import expressLogo from "../../assets/icons/express-seeklogo.com.svg";
import gitLogo from "../../assets/icons/git-seeklogo.com.svg";
import githubLogo from "../../assets/icons/github-seeklogo.com.svg";
import jsLogo from "../../assets/icons/javascript-js-seeklogo.com.svg";
import jestLogo from "../../assets/icons/jest-seeklogo.com.svg";
import jiraLogo from "../../assets/icons/jira-seeklogo.com.svg";
import mongoLogo from "../../assets/icons/mongodb-seeklogo.com.svg";
import nodeLogo from "../../assets/icons/nodejs-seeklogo.com.svg";
import postmanLogo from "../../assets/icons/postman-seeklogo.com.svg";
import reactLogo from "../../assets/icons/react-seeklogo.com.svg";
import reduxLogo from "../../assets/icons/redux-seeklogo.com.svg";
import testingLogo from "../../assets/icons/testing-library-seeklogo.com.svg";
import vueLogo from "../../assets/icons/vuejs-seeklogo.com.svg";
import solidityLogo from "../../assets/icons/solidity-seeklogo.com.svg";
import hardhatLogo from "../../assets/icons/hardhat-seeklogo.com.svg";

const About = () => {
  const icons = [
    jsLogo,
    reactLogo,
    solidityLogo,
    hardhatLogo,
    ethersLogo,
    vueLogo,
    reduxLogo,
    bootstrapLogo,
    nodeLogo,
    mongoLogo,
    expressLogo,
    mochaLogo,
    jestLogo,
    testingLogo,
    postmanLogo,
    jiraLogo,
    gitLogo,
    githubLogo,
  ];

  const education = [
    {
      name: "Semiotics MA",
      university: "University of Tartu/Estonia",
      year: "2020",
    },
    {
      name: "Semiotics MA w/ Erasmus+ Scholarship",
      university: "L'Université de Bordeaux-Montaigne/France",
      year: "2019",
    },
    {
      name: "Comparative Litarature BA w/ Erasmus+ Scholarship",
      university: "Eötvös Lorand University/Budapest",
      year: "2016",
    },
    {
      name: "Comparative Litarature BA",
      university: "Eskişehir Osmangazi University/Eskişehir",
      year: "2020",
    },
  ];

  const work = {
    techWork: [
      {
        name: "Frontend Developer (VueJs)",
        company: "DijitalGaraj",
        location: "remote",
        year: "2021-22",
      },
    ],
    nonTechWork: [
      {
        name: "Marketing Intern",
        company: "Langues Immersion Pro",
        location: "Montauban/France",
        year: "2018",
      },
      {
        name: "Journalism Intern",
        company: "Inter-Media Bruxelles",
        location: "Brussels/Belgium",
        year: "2016",
      },
    ],
  };
  return (
    <div id="aboutComponent">
      <div className="aboutWrapper d-flex flex-column-reverse flex-md-column">
        <div className="above d-flex flex-column flex-md-row justify-content-md-around">
          <div className="techStack d-flex flex-column ">
            <div className="aboutTitle d-flex justify-content-center">
              <div className="aboutBigtitle">My Tech Stack</div>
            </div>
            <div className="stacks d-flex justify-content-center flex-wrap ">
              {icons.map((icon, index) => {
                return (
                  <div key={index} className="logoContainer">
                    <img src={icon} className="logo" alt="icon" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="education d-flex flex-column align-items-center">
            <div className="aboutBigtitle">Education</div>
            {education.map((e, index) => {
              return (
                <div
                  key={index}
                  className="educationItem d-flex flex-column align-items-center"
                >
                  <div className="educationTitle">{e.name}</div>
                  <div className="educationUniversity">{e.university}</div>
                  <div className="educationYear">{e.year}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="below d-flex justify-content-center">
          <div className="work d-flex flex-column align-items-center">
            <div className="aboutBigtitle">Work Experience</div>
            <div className="techWork d-flex flex-column align-items-center">
              <div className="workIndicator">Tech Work</div>
              {work.techWork.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="workItem d-flex flex-column align-items-center"
                  >
                    <div className="workTitle">{e.name}</div>
                    <div className="workCompany">{e.company}</div>
                    <div className="workLocation">{e.location}</div>
                    <div className="workYear">{e.year}</div>
                  </div>
                );
              })}
            </div>
            <div className="nonTechWork d-flex flex-column align-items-center">
              <div className="workIndicator">Non-Tech Work</div>
              {work.nonTechWork.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="workItem d-flex flex-column align-items-center"
                  >
                    <div className="workTitle">{e.name}</div>
                    <div className="workCompany">{e.company}</div>
                    <div className="workLocation">{e.location}</div>
                    <div className="workYear">{e.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
