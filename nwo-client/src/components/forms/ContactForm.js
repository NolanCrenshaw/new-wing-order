import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { BASE_URL } from "../../config";

const ContactForm = () => {
  const userID = `${process.env.REACT_APP_EMAILJS_USER_ID}`;
  const ejsSERVICE = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
  const ejsTEMPLATE = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
  // State
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handlers
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  // Functions
  const fetchContactVars = async () => {
    const res = await fetch(`${BASE_URL}/api/contact/`, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      // -- TODO -- handling
      console.log("fetchContact res failure", res);
    } else {
      const json = await res.json();
      const contactVars = {
        service: json.service,
        template: json.template,
        user: json.user,
      };
      return contactVars;
    }
  };

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  const clearHandle = (e) => {
    e.preventDefault();
    clearForm();
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const vars = await fetchContactVars();
    const res = await emailjs.sendForm(
      vars.service,
      vars.template,
      e.target,
      vars.user
    );
    if (res.text !== "OK") {
      // -- TODO -- Error Handling
      // console.log("Contact Form EmailJS res failure: ", res.text);
    } else {
      clearForm();
    }
  };

  return (
    <div className="contact_form-container">
      <form className="contact_form" onSubmit={(e) => submitHandle(e)}>
        <div>
          <input
            id="contact_firstname"
            name="firstname"
            value={firstname}
            onChange={handleFirstname}
            type="text"
            placeholder="First Name"
          />
          <input
            id="contact_lastname"
            name="lastname"
            value={lastname}
            onChange={handleLastname}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          id="contact_email"
          name="email"
          value={email}
          onChange={handleEmail}
          type="email"
          placeholder="Email"
        />
        <textarea
          id="contact_message"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Your Message"
        />
        <div>
          <motion.button whileHover={{ scale: 1.2 }} type="submit" value="Send">
            Submit
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={clearHandle}>
            Clear Form
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
