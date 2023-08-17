import React from "react";

const Home = () => {
  return (
    <div className="homes flex"> 
      <div className="text p-8"> 
        <h1 className="all">All fast foods are<br />available at foodle</h1>
        <p className="we">
          We Are Just A Click Away When You<br />Crave For Delicious Fast Food
        </p>
        <button className="buy">Buy Now</button>
        <button className="button"></button>
        <span className="how">How To Order</span>
      </div>
      <div className="image ml-30">
        <img src={'./burger.png'} alt="" className="img" />
      </div>
    </div>
  );
};

export default Home;
