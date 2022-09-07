import React, { useState } from "react";
import "./contact.css";
import contactImg from "../../assets/images/contactImg.svg";
import { Button } from "../styled-components/Button.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMsg = (e) => {
    // typeof e === "string" ? setMessage(e) : setMessage(e.target.value);
    setMessage(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        to_name: "Murat",
        from_name: name,
        message: message,
        from_email: email,
      },
      process.env.REACT_APP_PUBLIC_KEY
    );
    handleMsg("");
    setName("");
    setEmail("");
    setMessage("");
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Email sent!</Popover.Header>
      <Popover.Body>
        Thank you for your email! I'll get back to you as soon as possible.
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="contactComponent d-flex flex-column">
      <div className="contactTitle align-self-center">Contact Me</div>
      <div
        className="contactWrapper d-flex flex-column flex-md-row justify-content-center align-items-center
     justify-content-md-evenly align-items-md-center"
      >
        <form className="formElement d-flex flex-column ">
          <input
            placeholder="Your Name"
            type="text"
            name="name"
            className="formItem"
            onChange={handleName}
            value={name}
          />
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            className="formItem"
            onChange={handleEmail}
            value={email}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            className="textArea"
            onChange={handleMsg}
            value={message}
          />

          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
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
          </OverlayTrigger>
          {/* <input type="submit" value="Submit" className="formItem" /> */}
        </form>
        <div className="contactImgContainer">
          <img className="contactImg" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
