import React, { useState } from "react";
import Projects from "./Projects";
import "./projects.css";
import binanceImg from "../../assets/images/binance.png";
import mathimals from "../../assets/images/mathimals.png";
import wagmiImg from "../../assets/images/wagmiSS.png";

const ProjectsContainer = () => {
  const data = [
    {
      id: 1,
      img: wagmiImg,
      title: "Wagmi Project",
      desc: "The user can connect to the dApp with different wallets and make transaction.",
      techUsed: ["React", "Solidity", "Hardhat", "EthersJs", "Wagmi.sh"],
      // hasArticle: true,
      buttonTexts: [
        {
          text: "Live Demo",
          link: " https://muratcan-yuksel.github.io/wagmi-front3/",
        },
        {
          text: "Source Code",
          link: " https://github.com/muratcan-yuksel/wagmi-post",
        },
        {
          text: "Relevant Article",
          link: "https://dev.to/muratcanyuksel/connecting-to-different-web3-wallets-using-wagmish-and-reactjs-1ojp",
        },
      ],
    },
    {
      id: 2,
      img: binanceImg,
      title: "Binance Clone with Websockets",
      desc: "This app provides the user with realtime btc/usd exchange rates.",
      techUsed: ["React", "Redux", "Websockets"],
      // hasArticle: true,
      buttonTexts: [
        {
          text: "Live Demo",
          link: "https://muratcan-yuksel.github.io/skyneb-app/",
        },
        {
          text: "Source Code",
          link: "https://github.com/muratcan-yuksel/skyneb-app",
        },
        {
          text: "Relevant Article",
          link: "https://dev.to/muratcanyuksel/using-websockets-with-react-50pi",
        },
      ],
    },
    {
      id: 3,
      img: mathimals,
      title: "Mathimals- A Children's Game",
      desc: "A game for children to practice their spelling skills.",
      techUsed: ["Vanilla JS", "Bootstrap", "Firebase"],
      buttonTexts: [
        {
          text: "Live Demo",
          link: "https://muratcan-yuksel.github.io/Mathimals/",
        },
        {
          text: "Source Code",
          link: "https://github.com/muratcan-yuksel/Mathimals",
        },
      ],
    },
  ];
  return (
    <div id="projectsComponent">
      <div className="titleContainer d-flex justify-content-center">
        <div className="bigTitle">Most recent work</div>
      </div>
      <Projects props={data} />
    </div>
  );
};

export default ProjectsContainer;
