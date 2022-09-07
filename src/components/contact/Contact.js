import React from "react";
import "./contact.css";
import contactImg from "../../assets/images/contactImg.svg";
import { Button } from "../styled-components/Button.styled";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendMail = (e) => {
    e.preventDefault();
    console.log(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      process.env.REACT_APP_PUBLIC_KEY
    );
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        to_name: "asdasd",
        from_name: "asdad",
        message: "asdasd",
        reply_to: "asdasd",
      },
      process.env.REACT_APP_PUBLIC_KEY
    );
  };

  return (
    <div
      className="contactComponent d-flex flex-column flex-md-row justify-content-center align-items-center
     justify-content-md-evenly align-items-md-center"
    >
      {/* Contact */}
      <form className="formElement d-flex flex-column ">
        <input
          placeholder="Your Name"
          type="text"
          name="name"
          className="formItem"
        />
        <input
          placeholder="Your Email"
          type="email"
          name="email"
          className="formItem"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          className="textArea"
        />
        <Button
          backgroundColor="#ff1255"
          color="white"
          hoverColor="black"
          border="2px solid white"
          fontSize="1.5rem"
          fontSizeHover="2rem"
          onClick={sendMail}
        >
          Send
        </Button>
        {/* <input type="submit" value="Submit" className="formItem" /> */}
      </form>
      <div className="contactImgContainer">
        <img className="contactImg" src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
