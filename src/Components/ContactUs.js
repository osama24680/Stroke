import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileLink, setFileLink] = useState("");

  let templeteParameters = {
    firstName,
    lastName,
    email,
    message,
    fileLink,
  };

  let serviceID = "service_f0dhnn6";
  let templeteID = "template_g6uya0e";
  let puplicKey = "1o7X5mK6MhxogzwGi";

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setFileLink("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(serviceID, templeteID, templeteParameters, puplicKey)
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log(err);
      });

    clearForm();
  }

  return (
    <>
      <h2
        style={{
          color: "#16a085",
          textAlign: "center",
          fontSize: "25px",
          marginBottom: "0",
          marginTop: "25px",
        }}
      >
        Contact Us
      </h2>
      <div className="ContactUs">
        <form onSubmit={handleSubmit}>
          <div className="doubleInput">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="singleInput">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="singleInput">
            <textarea
              rows="10"
              placeholder="enter your message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="singleInput">
            <input
              type="text"
              placeholder="Put the link of your file on drive"
              onChange={(e) => setFileLink(e.target.value)}
              value={fileLink}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
