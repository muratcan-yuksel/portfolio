import React from "react";
import "./header.css";
import image from "../../assets/images/pp.jpg";
import { Button } from "../styled-components/Button.styled";
import { Para } from "../styled-components/Para.styled";

const Header = () => {
  return (
    <div className="headerComponent d-flex flex-column-reverse flex-md-row justify-content-md-center align-items-md-center">
      <div className="headerTextGroup">
        <div className="headerBigTitle">
          {" "}
          Hi, <span className="headerTitle"> my name is Murat</span>{" "}
        </div>
        <Para fontFamily="inconsalata" fontWeight="500" lineHeight="2rem">
          I'm a web developer
        </Para>
        <Para fontFamily="inconsalata" fontWeight="500" lineHeight="2rem">
          I build things for web 3 as well as the good ol' fashioned web 2
        </Para>
        <Button backgroundColor="#ff1255" color="white" hoverColor="black">
          contact me
        </Button>
      </div>
      <div className="imageContainer">
        <img src={image} alt="" className="profileImage" />
      </div>
    </div>
  );
};

export default Header;
