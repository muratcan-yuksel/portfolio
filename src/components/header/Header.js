import React from "react";
import "./header.css";
import image from "../../assets/images/pp.jpg";
import { Button } from "../styled-components/Button.styled";
import { Para } from "../styled-components/Para.styled";
//import icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

const Header = () => {
  return (
    <div className="headerComponent d-flex flex-column-reverse flex-md-row justify-content-md-center align-items-md-center">
      <div className="headerTextGroup ">
        <div className="headerBigTitle">
          {" "}
          Hi, <span className="headerTitle"> my name is Murat</span>{" "}
        </div>
        <Para
          hoverBg="white"
          fontFamily="inconsalata"
          fontWeight="500"
          lineHeight="2rem"
          padding="0 10px"
        >
          I'm a web developer
        </Para>
        <Para
          hoverBg="white"
          fontFamily="inconsalata"
          fontWeight="500"
          lineHeight="2rem"
          padding="0 10px"
          textAlign="center"
        >
          I build things for web 3 as well as the good ol' fashioned web 2
        </Para>
        <div className="buttonGroup d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-start align-items-md-center ">
          <Button
            className="headerBtn"
            backgroundColor="#ff1255"
            color="white"
            hoverColor="black"
            border="2px solid white"
            bgColor="var(--yellow-bg)"
            fontSize="1.5rem"
            fontSizeHover="2rem"
            height="5rem"
            minWidth="10rem"
          >
            <p className="headerButtonText">contact me</p>
          </Button>
          <Para
            hoverBg="var(--yellow-bg)"
            margin="0 10px"
            fontFamily="inconsalata"
            fontWeight="500"
            lineHeight="2rem"
            padding="1rem 0"
            width="8rem"
          >
            or, find me on:{" "}
          </Para>
          <div className="iconGroup d-flex flex-row justify-content-center align-items-center">
            <FaGithub className="headerIcon" />
            <FaLinkedin className="headerIcon" />
            <SiDevdotto className="headerIcon" />
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={image} alt="" className="profileImage" />
      </div>
    </div>
  );
};

export default Header;
