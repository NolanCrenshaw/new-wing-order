import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { motion } from "framer-motion";

import EventCard from "./cards/EventCard";
import MenuItemCard from "./cards/MenuItemCard";
import SauceCard from "./cards/SauceCard";

import LoginForm from "./forms/LoginForm";
import EventForm from "./forms/EventForm";
import MenuItemForm from "./forms/MenuItemForm";

const Admin = () => {
  // Controls State
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "default" });
  const [dashboardScreen, setDashboardScreen] = useState("event");
  const [eventControl, setEventControl] = useState("");
  const [menuControl, setMenuControl] = useState("");
  const [sauceControl, setSauceControl] = useState("");

  // Fetched State
  const [events, setEvents] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [rubs, setRubs] = useState([]);

  // Navigation Control
  const handleClick = (element) => {
    setDashboardScreen(`${element}`);
  };

  // Logout Function
  const logout = () => {
    window.localStorage.removeItem("auth_token");
    setIsLoggedIn(false);
  };

  // Delete Functions
  const deleteEvent = async (id) => {
    const res = await fetch(`${BASE_URL}/api/events/delete`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify(id),
    });
    if (!res.ok) {
      console.log("deleteEvent failure");
    } else {
      console.log("deleteEvent success");
    }
  };

  // Login Control
  useEffect(() => {
    const token = window.localStorage.getItem("auth_token");
    const checkToken = async (tk) => {
      const res = await fetch(`${BASE_URL}/api/auth/`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tk}`,
        },
      });
      if (!res.ok) {
        setUser({ username: "default" });
        setIsLoggedIn(false);
      } else {
        const json = await res.json();
        setUser(json.admin);
        setIsLoggedIn(true);
      }
    };
    if (token !== null) {
      checkToken(token);
    }
  }, [loginAttempt]);

  // Admin Screen Control
  useEffect(() => {
    if (dashboardScreen === "event") {
      setEventControl("admin_event");
      setMenuControl("admin_menu hidden");
      setSauceControl("admin_sauce hidden");
    } else if (dashboardScreen === "menu") {
      setEventControl("admin_event hidden");
      setMenuControl("admin_menu");
      setSauceControl("admin_sauce hidden");
    } else if (dashboardScreen === "sauce") {
      setEventControl("admin_event hidden");
      setMenuControl("admin_menu hidden");
      setSauceControl("admin_sauce");
    }
  }, [dashboardScreen]);

  // Fetch Control
  useEffect(() => {
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
    getEvents();
    getMenuItems();
    getSauces();
    getRubs();
  }, []);

  return (
    <div className="admin-container" id="admin">
      {!isLoggedIn ? (
        <LoginForm setLoginAttempt={() => setLoginAttempt(!loginAttempt)} />
      ) : (
        <>
          <nav>
            <h2>Admin Dashboard</h2>
            <ul>
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
            </ul>
            <div>
              <h3>{`Welcome ${user.username}`}</h3>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          </nav>
          <body>
            <section className={eventControl}>
              <h2 className="admin-section_title">Events</h2>
              <div className="admin-screen">
                <EventForm />
                <ul>
                  {events.map((event, key) => (
                    <li className="admin-card-wrapper" key={key}>
                      <EventCard event={event} />
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        className="delete_card"
                        onClick={() => deleteEvent(event.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trash"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ff2825"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className={menuControl}>
              <h2 className="admin_list_title">Menu Items</h2>
              <div classname="admin-screen">
                <ul>
                  {menuItems.map((item, i) => (
                    <li className="admin-card-wrapper" key={i}>
                      <MenuItemCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className={sauceControl}>
              <h2 className="admin_list_title">Sauces</h2>
              <div classname="admin-screen">
                <ul>
                  {sauces.map((item, i) => (
                    <li className="admin-card-wrapper" key={i}>
                      <SauceCard item={item} />
                    </li>
                  ))}
                </ul>
                <h2 className="admin_list_title">Dry Rubs</h2>
                <ul>
                  {rubs.map((item, i) => (
                    <li className="admin-card-wrapper" key={i}>
                      <SauceCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </body>
        </>
      )}
    </div>
  );
};

export default Admin;
