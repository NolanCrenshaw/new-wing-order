import React from "react";
import { Repeater } from "../utils";

const SauceCard = ({ item }) => {
  return (
    <div className="sauce-card">
      <span>
        {item.name}
        <div>
          <Repeater numTimes={item.heat}>
            {(i) => (
              <div key={i}>
                <img
                  alt="fire icon"
                  src="https://img.icons8.com/emoji/48/000000/fire.png"
                />
              </div>
            )}
          </Repeater>
        </div>
      </span>
    </div>
  );
};

export default SauceCard;
