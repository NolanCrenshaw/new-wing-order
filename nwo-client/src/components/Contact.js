import React from "react";
import { motion } from "framer-motion";

import ContactForm from "./forms/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact_socialbox">
        <h1>Questions?</h1>
        <h1>Please Contact Us</h1>
        <ul>
          <div className="socialbox-divider" />
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="https://www.facebook.com/NewWingOrder/">
              <img src="https://img.icons8.com/material-outlined/48/000000/facebook.png" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="https://www.instagram.com/newwingorder/">
              <img src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="https://twitter.com/newwingorder">
              <img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="https://www.youtube.com/channel/UCsJxqotVF1LuhOGeC5YfKpw">
              <img src="https://img.icons8.com/material-outlined/48/000000/youtube--v1.png" />
            </a>
          </motion.li>
          <div className="socialbox-divider" />
        </ul>
        <span>info@newwingorder.com | 901.747.8893 </span>
      </div>
      <div className="contact_formbox">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
