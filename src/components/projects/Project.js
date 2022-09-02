import React from "react";

const Project = ({ id, img, title, desc }) => {
  return (
    <div className="project">
      <div className="projectImg">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Project;
