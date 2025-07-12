import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">DreamDesign3D</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Delivering high-quality architectural and construction solutions
            across India with a passion for innovation and precision.
          </p>
          <div className="flex mt-4 space-x-4 text-xl text-gray-400">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Office */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Office</h3>
          <p className="text-sm text-gray-300">
            Opp. Bank Of Baroda,
            <br />
            Arvi, Dist. Wardha,
            <br />
            Maharashtra - 442201
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300">
            <span>Email:</span>{" "}
            <a
              href="mailto:dreamdesign3d@gmail.com"
              className="underline hover:text-orange-400"
            >
              dreamdesign3d@gmail.com
            </a>
            <br />
            <span>Phone:</span> +91 82378 72906
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-r text-white hover:bg-orange-600 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {year} <span className="font-semibold">DreamDesign3D</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
