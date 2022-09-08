import React, { useState } from "react";
import "./contact.css";
import contactImg from "../../assets/images/contactImg.svg";
import { Button } from "../styled-components/Button.styled";
import emailjs from "@emailjs/browser";
import Toast from "react-bootstrap/Toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputBools, setInputBools] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [toastValue, setToastValue] = useState();
  const [regexCheck, setRegexCheck] = useState(null);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleName = (e) => {
    setName(e.target.value);
    setInputBools({ ...inputBools, name: true });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setInputBools({ ...inputBools, email: true });
    checkRegex();
  };
  const handleMsg = (e) => {
    setMessage(e.target.value);
    setInputBools({ ...inputBools, message: true });
  };

  const checkRegex = () => {
    let testRegex = emailRegex.test(email);
    if (testRegex) {
      console.log(true);
      setRegexCheck(true);
    } else {
      console.log(false);
      setRegexCheck(false);
    }
  };
  const sendMail = (e) => {
    e.preventDefault();
    if (
      inputBools.name &&
      inputBools.email &&
      inputBools.message &&
      regexCheck
    ) {
      console.log(name, email, message);
      // emailjs.send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   {
      //     to_name: "Murat",
      //     from_name: name,
      //     message: message,
      //     from_email: email,
      //   },
      //   process.env.REACT_APP_PUBLIC_KEY
      // );
      setName("");
      setEmail("");
      setMessage("");
      setToastValue(true);
    }
  };

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
          {regexCheck ? null : (
            <Toast style={{ width: "100%" }}>
              <Toast.Body style={{ width: "100%" }}>
                {" "}
                Please enter a valid email address.
              </Toast.Body>
            </Toast>
          )}
          <textarea
            placeholder="Your Message"
            name="message"
            className="textArea"
            onChange={handleMsg}
            value={message}
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
          {toastValue ? (
            <Toast style={{ width: "100%" }}>
              <Toast.Body style={{ width: "100%" }}>
                {" "}
                Thank you for your email! I'll get back to you as soon as
                possible.
              </Toast.Body>
            </Toast>
          ) : null}
        </form>
        <div className="contactImgContainer">
          <img className="contactImg" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
