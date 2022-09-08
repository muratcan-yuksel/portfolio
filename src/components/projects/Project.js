import React, { useState } from "react";
import { Button } from "../styled-components/Button.styled";
import { Para } from "../styled-components/Para.styled";
import "./projects.css";

const Project = ({ id, img, title, desc, techUsed, buttonTexts }) => {
  const buttonsForLinksArray = [{}];
  return (
    <div className="project d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-evenly align-items-md-center">
      <div className="left">
        <div className="projectImg">
          <img className="img" src={img} alt="" />
        </div>
      </div>
      <div className="right d-flex flex-column justify-content-center align-items-center align-items-md-start">
        <div className="title justify-self-center">{title} </div>
        <Para
          className="desc "
          fontFamily="inconsalata"
          fontWeight="500"
          lineHeight="2rem"
          color="#172e38"
        >
          {desc}
        </Para>
        <Para
          fontFamily="inconsalata"
          fontWeight="800"
          color="#172e38"
          className="techUsedTitle"
        >
          Tech Used
        </Para>
        <div className="techUsed ">
          <div className=" d-flex flex-wrap">
            {techUsed.map((e, index) => {
              return (
                <Para
                  fontFamily="inconsalata"
                  fontWeight="500"
                  color="#172e38"
                  margin="0 0 1rem 1rem"
                  key={index}
                  className="techUsedItem"
                >
                  {e}
                </Para>
              );
            })}
          </div>
        </div>
        <div className="buttons d-flex justify-content-center justify-content-md-start flex-wrap">
          {buttonTexts.map((e, index) => {
            return (
              <a
                className="projectLink"
                href={e.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <Button
                  backgroundColor="white"
                  border="1px solid rgba(0,124,137,.3)"
                  borderHover="1px solid  #004e56"
                  color="#004e56"
                  fontSize="1rem"
                  height="3.5rem"
                  minWidth="8rem"
                >
                  {e.text}
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
