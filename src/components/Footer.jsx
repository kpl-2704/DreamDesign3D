import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div>
          <h2 className="text-lg font-bold">DREAM DESIGN 3D</h2>
          <p className="text-sm mt-4">
            We have the confidence to provide the best service for you, with the support of Professional and Certified HR that
            we currently have and the high-quality materials we use and structured work techniques, we will be able to realize
            timely completion of work.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <a className="fab fa-linkedin" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <a className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <a className="fab fa-facebook" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <a className="fab fa-twitter" />
            </a>
          </div>
        </div>

        {/* Office Section */}
        <div>
          <h3 className="text-lg font-bold">Office</h3>
          <p className="text-sm mt-4">Opposite of Bank Of Baroda Branch, Arvi, Ta. Arvi, Di. Wardha - 442201</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="text-sm mt-4">
            Email: <a href="mailto:dreamdesign3d@gmail.com"> dreamdesign3d@gmail.com</a>
            <br />
            Phone: (+91) 823-7872-906
          </p>
        </div>

        {/* Links and Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold">Subscribe To Our Newsletter</h3>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 flex-grow bg-gray-800 text-white rounded-l-md"
            />
            <button type="submit" className="bg-orange-500 p-2 rounded-r-md text-white">
              →
            </button>
          </form>
          <ul className="mt-4 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">© 2025 DreamDesign3D. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
