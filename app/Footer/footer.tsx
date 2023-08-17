import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-red-100 text-white-50 py-10">
        <div className="flex justify-between px-10">
          <div className="w-1/4">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Fooodish</h3>
            <p className="text-gray-500">Continue Fooodish 2023 all rights reserved</p>
            <h3 className="text-xl mt-4 text-red-500">Follow us On</h3>
          </div>
          <div className="w-1/4">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Menu</h3>
            <ul className="list-none" >
              <li className="text-gray-500">Home</li>
              <li className="text-gray-500">Offers</li>
              <li className="text-gray-500">Service</li>
              <li className="text-gray-500" >About Us</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Information</h3>
            <ul className="list-none">
              <li className="text-gray-500">Menu</li>
              <li className="text-gray-500">Quality</li>
              <li className="text-gray-500">Make a choice</li>
              <li className="text-gray-500">Salad with Vegetable</li>
              <li className="text-gray-500">Fast Delivery</li>
              <li className="text-gray-500">Subscribe</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Contact</h3>
            <ul className="list-none">
              <li className="text-gray-500">+123456789</li>
              <li className="text-gray-500">Explore</li>
              <li className="text-gray-500">info@foodish.com</li>
              <li className="text-gray-500">1245, New York, USA</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
