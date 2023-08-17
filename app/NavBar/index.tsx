
import React from "react";

const NavBar = () => {
  return (
    <div className="navB">
      <nav className="mt-5 mx-5">
        <a className="foodle text-black text-3xl mr-5">Foodle</a>
        <a href="Home">
          <span className="home text-black text-xl">Home</span>
        </a>
        <a href="Offer" className="text-black text-xl">Offer</a>
        <a href="Service" className="text-black text-xl">Service</a>
        <a href="Menu" className="text-black text-xl">Menu</a>
        <a href="About Us" className="text-black text-xl">About Us</a>
        <button className="log text-red-600 border-none text-xl ml-5">Log In</button>
        <button className="sign text-red-600 border-2 border-red-600 rounded-full px-6 py-2 text-xl ml-5">Sign Up</button>
      </nav>
    </div>
  );
}

export default NavBar;
