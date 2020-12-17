import React, { useState } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [user, setUser] = useState("default");
  const [dashScreen, setDashScreen] = useState("default");

  return (
    <div className="admin-container">
      <nav>
        <h2>Admin Dashboard</h2>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => setDashScreen("events")}
        >
          Events
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => setDashScreen("menu")}
        >
          Menu
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => setDashScreen("sauces")}
        >
          Sauces
        </motion.li>
        <h3>{`Welcome ${user}`}</h3>
      </nav>
      <section></section>
    </div>
  );
};

export default Admin;
