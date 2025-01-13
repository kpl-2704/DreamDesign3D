import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/home"}>
          <div className="text-2xl font-bold text-gray-800">DREAM DESIGN 3D</div>
        </Link>
        <div className="flex gap-6 items-center">
          <a href="/home" className="hover:text-gray-500">
            Home
          </a>
          <a href="#" className="hover:text-gray-500">
            About Us
          </a>
          <a href="/services" className="hover:text-gray-500">
            Services
          </a>
          <a href="#" className="hover:text-gray-500">
            Projects
          </a>
          <Link to={"/contact_us"} className="hover:text-gray-500">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
