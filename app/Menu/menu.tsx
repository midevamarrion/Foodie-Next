import React from "react";
import { Images } from "../Json/json";

const Menu = () => {
  return (
    <div className="image grid grid-cols-3 gap-4 mt-5">
      {Images.map((imag, id) => (
        <div className="container" key={id}>
          <img
            src={imag.imgs}
            alt="product"
            className="max-w-full mb-2 border-5 border-red-500 rounded-120"
          />
          <div className="">
            <h1 className="font-size-1.5rem mt-5">{imag.title}</h1>
            <p className="mt-5">{imag.ratings}</p>
            <p className="mt-5">{imag.price}</p>
            <button className="bg-#c50707 text-#fff border-none px-10 py-5 mt-10 cursor-pointer
             font-size-large rounded-30">
              {imag.button}
            </button>
            <p className="mt-5">{imag.tag}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
