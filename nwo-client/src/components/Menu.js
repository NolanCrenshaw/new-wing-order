import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";

import { Repeater } from "./utils";

const Menu = () => {
  // State
  const [menuItems, setMenuItems] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [rubs, setRubs] = useState([]);

  // Fetch Functions
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

  useEffect(() => {
    getMenuItems();
    getSauces();
    getRubs();
  }, []);

  return (
    <div className="menu-container">
      <div className="menu_items">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item, i) => (
            <li>
              <div className="item_text">
                <span>{item.name}</span>
                <p>{item.description}</p>
              </div>
              <div className="item_price">
                <span>$</span>
                <div>{item.price}</div>
              </div>
            </li>
          ))}
        </ul>
        <h2>Wings</h2>
        <div className="wings">
          <p>
            Seasoned or sauced of your choice of flavor (one flavor per six
            wings).
          </p>
          <p>Your choice of dipping sauce: Ranch or Blue Cheese.</p>
          <p>Includes Hawaiian Roll, Carrots, and Celery.</p>
          <p>Extra sauce $0.25</p>
          <p>Extra bread $0.50</p>
          <div className="wing_option">
            <div className="wing_text">
              <h4>Six Piece</h4>
              <span>Traditional or Boneless</span>
            </div>
            <div className="item_price">
              <span>$</span>
              <div>9</div>
            </div>
          </div>
          <div className="wing_option">
            <div className="wing_text">
              <h4>Twelve Piece</h4>
              <span>Traditional or Boneless</span>
            </div>
            <div className="item_price">
              <span>$</span>
              <div>15</div>
            </div>
          </div>
          <div className="wing_option">
            <div className="wing_text">
              <h4>Eighteen Piece</h4>
              <span>Traditional or Boneless</span>
            </div>
            <div className="item_price">
              <span>$</span>
              <div>21</div>
            </div>
          </div>
        </div>
        <div className="flavors">
          <div className="sauces">
            <h2>Signature Sauces</h2>
            <ul>
              {sauces.map((item, i) => (
                <li>
                  <span>
                    {item.name}
                    <div>
                      <Repeater numTimes={item.heat}>
                        {(i) => (
                          <div key={i}>
                            <img src="https://img.icons8.com/emoji/48/000000/fire.png" />
                          </div>
                        )}
                      </Repeater>
                    </div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flavors-divider" />
          <div className="rubs">
            <h2>Dry Seasonings</h2>
            <ul>
              {rubs.map((item, i) => (
                <li>
                  <span>
                    {item.name}
                    <div>
                      <Repeater numTimes={item.heat}>
                        {(i) => (
                          <div key={i}>
                            <img src="https://img.icons8.com/emoji/48/000000/fire.png" />
                          </div>
                        )}
                      </Repeater>
                    </div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
