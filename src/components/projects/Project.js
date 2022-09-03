import React, { useState } from "react";
import { Button } from "../styled-components/Button.styled";
import "./projects.css";

const Project = ({ id, img, title, desc }) => {
  return (
    <div className="project d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-around align-items-lg-center">
      <div className="left">
        <div className="projectImg">
          <img className="img" src={img} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="title">{title} </div>
        <div className="desc">{desc} </div>
        <Button />
      </div>
    </div>
  );
};

export default Project;
