import React, { useState } from "react";
import Projects from "./Projects";
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
  return <Projects props={data} />;
};

export default ProjectsContainer;
