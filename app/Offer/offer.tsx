import React from "react";

const Offer = () => {
  return (
    <div className="offerss flex justify-center items-center">
      {/* First section */}
      <div>
        <h1 className="best font-semibold text-2xl">
          Best<span className="delivery text-red-500">Delivered</span> Categories
        </h1>
        <p className="here mt-4">
          Here Are Some Of Our Best Distributed Categories. If You Want, You Can Order From Here.
        </p>
      </div>

      {/* Second section */}
      <div className="offer flex space-x-4">
        <div className="item">
          <img src={'./burgers.png'} alt="" className="img" />
          <p className="chicken font-semibold mt-2">Chicken Burger</p>
          <p className="order text-red-500">Order Now</p>
        </div>
        <div className="item">
          <img src={'./pizza.png'} alt="" className="img" />
          <p className="chicken font-semibold mt-2">French Fries</p>
          <p className="order text-red-500">Order Now</p>
        </div>
        <div className="item">
          <img src={'./chipss.png'} alt="" className="img" />
          <p className="chicken font-semibold mt-2">Chicken Pizza</p>
          <p className="order text-red-500">Order Now</p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
