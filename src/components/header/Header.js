import React from "react";
import "./header.css";
import image from "../../assets/images/pp.jpg";

const Header = () => {
  return (
    <div className="headerComponent d-flex flex-column flex-md-row justify-content-center">
      <div className="headerTextGroup">
        <div className="headerBigTitle">
          {" "}
          Hi, <span className="headerTitle"> my name is Murat</span>{" "}
        </div>
        <div className="headerPara">I'm a web developer</div>
        <div className="headerPara">
          I build things for web 3 as well as the good ol' fashioned web 2
        </div>
      </div>
      <div className="imageContainer">
        <img src={image} alt="" className="profileImage" />
      </div>
    </div>
  );
};

export default Header;
