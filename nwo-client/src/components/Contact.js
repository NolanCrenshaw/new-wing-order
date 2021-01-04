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
      <div className="contact_infobox">
        <h2>How Can We Help?</h2>
        <h4>We Cater</h4>
        <p>
          With New Wing Order catering, the award-winning wings come to you! We
          cater business events, private events, weddings, parties, reunions,
          sporting events, and more. Full service options are available. Contact
          us to discuss catering options and book us today!
        </p>
        <div />
        <h4>Have the Truck Come to You</h4>
        <p>
          New Wing Order provides food truck and catering services to the
          greater Memphis area. This page is updated weekly with our service
          schedule. Not seeing a location close enough? Book us!
        </p>
        <div />
      </div>
    </div>
  );
};

export default Contact;
