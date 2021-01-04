import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
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
  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  const submit = () => {
    console.log("Submit Pressed");
    clearForm();
  };

  return (
    <div className="contact-form">
      <div>
        <input
          id="contact_firstname"
          value={firstname}
          onChange={handleFirstname}
          type="text"
          placeholder="First Name"
        />
        <input
          id="contact_lastname"
          value={lastname}
          onChange={handleLastname}
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        id="contact_email"
        value={email}
        onChange={handleEmail}
        type="email"
        placeholder="Email"
      />
      <textarea
        id="contact_message"
        value={message}
        onChange={handleMessage}
        placeholder="Your Message"
      />
      <div>
        <motion.button whileHover={{ scale: 1.2 }} onClick={submit}>
          Submit
        </motion.button>
        <motion.button whileHover={{ scale: 1.2 }} onClick={clearForm}>
          Clear Form
        </motion.button>
      </div>
    </div>
  );
};

export default ContactForm;
