import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about_us" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/all-projects" },
  { name: "Gallery", path: "/gallery" },
  // { name: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-600 tracking-tight"
        >
          DreamDesign3D
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-orange-600 ${
                location.pathname === link.path
                  ? "text-orange-500 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact_us">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact_us" onClick={() => setIsOpen(false)}>
            <button className="bg-orange-500 text-white px-4 py-2 rounded w-full mt-2">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
