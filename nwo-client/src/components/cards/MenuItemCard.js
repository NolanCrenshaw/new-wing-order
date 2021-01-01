import React from "react";

const MenuItemCard = ({ item }) => {
  return (
    <div className="menuItem-card">
      <div className="item_text">
        <span>{item.name}</span>
        <p>{item.description}</p>
      </div>
      <div className="item_price">
        <span>$</span>
        <div>{item.price}</div>
      </div>
    </div>
  );
};

export default MenuItemCard;
