import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { motion } from "framer-motion";

import EventCard from "./cards/EventCard";
import MenuItemCard from "./cards/MenuItemCard";
import SauceCard from "./cards/SauceCard";

import EventForm from "./forms/EventForm";

const defaultEvent = {
  id: 0,
  address: "Central BBQ address",
  geo_lat: 0,
  geo_lng: 0,
  location_name: "Memphis, TN",
  start_time: null,
  end_time: null,
};

const Admin = () => {
  // Controls State
  const [user, setUser] = useState("default");
  const [dashScreen, setDashScreen] = useState("event");
  const [eventClass, setEventClass] = useState("");
  const [menuClass, setMenuClass] = useState("");
  const [sauceClass, setSauceClass] = useState("");

  // Fetched State
  const [events, setEvents] = useState([defaultEvent]);
  const [menuItems, setMenuItems] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [rubs, setRubs] = useState([]);

  // Navigation Control
  const handleClick = (element) => {
    setDashScreen(`${element}`);
  };

  // Fetch Functions
  const getEvents = async () => {
    const res = await fetch(`${BASE_URL}/api/events/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      // -- TODO Handling
      console.log("getEvents res failure");
    } else {
      const json = await res.json();
      setEvents(json.events);
    }
  };
  const getMenuItems = async () => {
    const res = await fetch(`${BASE_URL}/api/menu_items/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      // -- TODO Handling
      console.log("getMenuItems res failure");
    } else {
      const json = await res.json();
      setMenuItems(json.menu_items);
    }
  };
  const getSauces = async () => {
    const res = await fetch(`${BASE_URL}/api/sauces/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      // -- TODO Handling
      console.log("getSauces res failure");
    } else {
      const json = await res.json();
      setSauces(json.sauces);
    }
  };
  const getRubs = async () => {
    const res = await fetch(`${BASE_URL}/api/rubs/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      // -- TODO Handling
      console.log("getRubs res failure");
    } else {
      const json = await res.json();
      setRubs(json.rubs);
    }
  };

  // Admin Screen Control
  useEffect(() => {
    if (dashScreen === "event") {
      setEventClass("admin_event");
      setMenuClass("admin_menu hidden");
      setSauceClass("admin_sauce hidden");
    } else if (dashScreen === "menu") {
      setEventClass("admin_event hidden");
      setMenuClass("admin_menu");
      setSauceClass("admin_sauce hidden");
    } else if (dashScreen === "sauce") {
      setEventClass("admin_event hidden");
      setMenuClass("admin_menu hidden");
      setSauceClass("admin_sauce");
    }
  }, [dashScreen]);

  // Fetch Control
  useEffect(() => {
    getEvents();
    getMenuItems();
    getSauces();
    getRubs();
  }, []);

  return (
    <div className="admin-container">
      <nav>
        <h2>Admin Dashboard</h2>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => handleClick("event")}
        >
          Events
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => handleClick("menu")}
        >
          Menu
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          onClick={() => handleClick("sauce")}
        >
          Sauces
        </motion.li>
        <h3>{`Welcome ${user}`}</h3>
      </nav>
      <section className={eventClass}>
        <h2 className="admin_list_title">Events</h2>
        <EventForm />
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </section>
      <section className={menuClass}>
        <h2 className="admin_list_title">Menu Items</h2>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <MenuItemCard item={item} />
            </li>
          ))}
        </ul>
      </section>
      <section className={sauceClass}>
        <h2 className="admin_list_title">Sauces</h2>
        <ul>
          {sauces.map((item, i) => (
            <li key={i}>
              <SauceCard item={item} />
            </li>
          ))}
        </ul>
        <h2 className="admin_list_title">Dry Rubs</h2>
        <ul>
          {rubs.map((item, i) => (
            <li key={i}>
              <SauceCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admin;
