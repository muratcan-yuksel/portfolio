import React from "react";
import Project from "./Project";

const Projects = ({ props }) => {
  return (
    <div id="projects">
      {props.map((e) => {
        return <Project key={e.id} {...e} />;
      })}
    </div>
  );
};

export default Projects;
