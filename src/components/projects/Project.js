import React, { useState } from "react";
import { Button } from "../styled-components/Button.styled";
import { Para } from "../styled-components/Para.styled";
import "./projects.css";

const Project = ({ id, img, title, desc }) => {
  return (
    <div className="project d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-evenly align-items-md-center">
      <div className="left">
        <div className="projectImg">
          <img className="img" src={img} alt="" />
        </div>
      </div>
      <div className="right d-flex flex-column justify-content-center align-items-start">
        <div className="title justify-self-center">{title} </div>
        <Para
          fontFamily="inconsalata"
          fontWeight="500"
          lineHeight="2rem"
          className="desc"
        >
          {desc}{" "}
        </Para>
        <Button />
      </div>
    </div>
  );
};

export default Project;
