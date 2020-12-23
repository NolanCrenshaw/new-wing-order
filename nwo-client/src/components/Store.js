import React from "react";

const Store = () => {
  return (
    <div className="store-container">
      <div className="merchandise">
        <h2>Shop our Store</h2>
        <a href="https://newwingorderstore.square.site/">
          <img src="./images/sauce_bottle.jpg" />
        </a>
      </div>
      <div className="gift_cards">
        <h2>Purchase a Gift Card</h2>
        <a href="https://squareup.com/gift/QS5H9HSKJK0YT/order">
          <img src="./images/truck_svg.png" />
        </a>
      </div>
    </div>
  );
};

export default Store;
