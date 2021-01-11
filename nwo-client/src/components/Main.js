import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import ReactModal from "react-modal";

import Modal from "./Modal";
import Landing from "./Landing";
import Location from "./Location";
import Menu from "./Menu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";
import Admin from "./Admin";

const modalStyles = {
  content: {
    width: "80%",
    height: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    border: "none",
    boxShadow:
      "0 3rem 5rem rgba(0,0,0,0.5), 5rem 5rem 25rem rgba(0,0,0,0.2), inset 1rem 1rem 1rem rgba(255,255,255,0.2)",
    scrollbarWidth: "none",
  },
  overlay: { zIndex: 10 },
};

const Main = () => {
  // Modal State
  const [adminIsOpen, setAdminIsOpen] = useState(false);

  // Expand State

  const handleAdmin = () => {
    setAdminIsOpen(!adminIsOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="main-container"
    >
      {/* <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={modalStyles}
        contentLabel="Example"
      >
        <div className="landing-modal--background">
          <Modal content={modalContent} />
        </div>
      </ReactModal> */}
      <Router>
        <Landing />
        <Location />
        <Menu />
        <Awards />
        <Contact />
        <Footer handleAdmin={handleAdmin} />
        {adminIsOpen ? <Admin /> : <div />}
      </Router>
    </motion.div>
  );
};

export default Main;
