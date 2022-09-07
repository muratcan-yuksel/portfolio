import React from "react";
import "./contact.css";
import contactImg from "../../assets/images/contactImg.svg";

const Contact = () => {
  return (
    <div className="contactComponent d-flex flex-column flex-md-row justify-content-around align-items-center">
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
          className="formItem"
        />

        <input type="submit" value="Submit" className="formItem" />
      </form>
      <div className="contactImgContainer">
        <img className="contactImg" src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
