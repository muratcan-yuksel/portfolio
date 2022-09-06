import React from "react";
import "./about.css";
import ethersIcon from "../../assets/icons/ethers-seeklogo.com.svg";
import mochaIcon from "../../assets/icons/mocha-seeklogo.com.svg";
const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript (ES6)",
    "React",
    "Solidity",
    "Hardhat",
    "EthersJs",
    "VueJs",
    "Redux",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
    "Bootstrap",
    "Jest",
    "Mocha",
    "Chai",
    "React Testing Library",
    "Postman",
    "Jira",
  ];

  const icons = [ethersIcon, mochaIcon];
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
        year: "2016-2020",
      },
      {
        name: "Journalism Intern",
        company: "Inter-Media Bruxelles",
        location: "Brussels/Belgium",
        year: "2020-2021",
      },
    ],
  };
  return (
    <div id="aboutComponent">
      <div className="aboutWrapper d-flex flex-column-reverse flex-md-column">
        <div className="above d-flex flex-column flex-md-row justify-content-md-around">
          <div className="techStack d-flex flex-column ">
            <div className="aboutTitle d-flex justify-content-center">
              {/* this bigTitle class is located at projects.css */}
              <div className="bigTitle">My Tech Stack</div>
            </div>
            <div className="stacks d-flex justify-content-center flex-wrap ">
              {/* {techStack.map((stack, index) => (
                <div key={index} className="stack">
                  {stack}
                </div>
              ))} */}
              {icons.map((icon, index) => {
                return (
                  <div key={index} className="iconContainer">
                    <img src={icon} className="icon" alt="icon" />
                  </div>
                );
              })}
              {/* <div className="iconContainer">
                <img src={ethersIcon} alt="" />
              </div> */}
            </div>
          </div>
          <div className="education d-flex flex-column align-items-center">
            {/* this bigTitle class is located at projects.css */}
            <div className="bigTitle">Education</div>
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
          <div className="work">
            {/* this bigTitle class is located at projects.css */}
            <div className="bigTitle">Work Experience</div>
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
