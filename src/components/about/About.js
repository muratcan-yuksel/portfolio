import React from "react";
import "./about.css";
const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript (ES6)",
    "React",
    "VueJs",
    "Redux",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
    "Bootstrap",
    "Solidity",
    "Hardhat",
    "EthersJs",
    "Jest",
    "Mocha",
    "Chai",
    "React Testing Library",
    "Heroku",
    "Netlify",
    "Postman",
    "Jira",
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
              <div>My Tech Stack</div>
            </div>
            <ul className="stacks d-flex justify-content-center flex-wrap ">
              {techStack.map((stack, index) => (
                <li key={index} className="stack">
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          <div className="education d-flex flex-column align-items-center">
            education
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
            work
            <div className="techWork">
              tech work
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
            <div className="nonTectWork">
              non-tech work
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
