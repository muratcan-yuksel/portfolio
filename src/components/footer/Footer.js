import React from "react";
import "./footer.css";
import { Para } from "../styled-components/Para.styled";

const Footer = () => {
  return (
    <div className="footerComponent d-flex justify-content-center align-items-center">
      <Para
        margin="0 10px"
        fontFamily="inconsalata"
        fontWeight="500"
        lineHeight="2rem"
        padding="1rem 0"
        width="auto"
      >
        Made by Murat Can Yüksel
      </Para>
    </div>
  );
};

export default Footer;
