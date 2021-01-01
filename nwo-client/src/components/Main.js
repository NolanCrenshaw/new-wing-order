import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import ReactModal from "react-modal";

import Modal from "./Modal";
import Landing from "./Landing";
import Location from "./Location";
import Menu from "./Menu";
import QuickMenu from "./QuickMenu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";

const modalStyles = {
  content: {
    width: "80%",
    height: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "gray",
    borderRadius: "20px",
    border: "none",
    boxShadow:
      "0 3rem 5rem rgba(0,0,0,0.5), 5rem 5rem 25rem rgba(0,0,0,0.2), inset 1rem 1rem 1rem rgba(255,255,255,0.2)",
    scrollbarWidth: "none",
  },
  overlay: { zIndex: 10 },
};

const Main = () => {
  // Modal State
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("blank");

  // Expand State
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);

  const handleModal = (component) => {
    if (modalIsOpen) {
      setModalIsOpen(false);
      setModalContent("modal_blank");
    } else {
      setModalIsOpen(true);
      console.log(`${component}`);
      setModalContent(`${component}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="main-container"
    >
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={modalStyles}
        contentLabel="Example"
      >
        <div className="landing-modal--background">
          <Modal content={modalContent} />
        </div>
      </ReactModal>
      <Router>
        <Landing />
        <Location />
        <QuickMenu modalControl={handleModal} />
        {isExpanded ? <Menu /> : <div className="closed-menu" />}
        <Awards />
        <Contact />
        <Footer modalControl={handleModal} />
      </Router>
    </motion.div>
  );
};

export default Main;
