import React, { useState } from "react";
import Projects from "./Projects";
import "./projects.css";
import binanceImg from "../../assets/images/binance.png";
import mathimals from "../../assets/images/mathimals.png";

const ProjectsContainer = () => {
  const data = [
    {
      id: 1,
      img: binanceImg,
      title: "Binance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      img: mathimals,
      title: "Mathimals",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  return (
    <div className=" ">
      <div className="titleContainer d-flex justify-content-center">
        <div className="bigTitle">Most recent work</div>
      </div>
      <Projects props={data} />
    </div>
  );
};

export default ProjectsContainer;
