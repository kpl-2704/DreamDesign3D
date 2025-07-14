import React from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaTools,
  FaCheckCircle,
  FaMapMarkedAlt,
} from "react-icons/fa";

const BuildingServices = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Building Construction Services
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          From foundation to finish, we manage end-to-end building construction
          with quality, speed, and transparency.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {[
          {
            title: "Residential & Commercial Construction",
            icon: <FaBuilding className="text-3xl text-indigo-600" />,
            image: "/assets/elevation1.jpeg",
            content:
              "Whether it’s a dream home or a commercial space, our team delivers functional, modern, and regulation-compliant buildings tailored to your needs.",
          },
          {
            title: "Structural Design & Safety Compliance",
            icon: <FaCheckCircle className="text-3xl text-green-600" />,
            image: "/assets/Elevation.jpeg",
            content:
              "We work with certified engineers to ensure every building structure is safe, seismic-resistant, and aligns with local building codes and laws.",
          },
          {
            title: "Material Management & Quality Execution",
            icon: <FaTools className="text-3xl text-yellow-600" />,
            image: "/assets/constr8.jpeg",
            content:
              "We source top-grade cement, steel, tiles, and finishing materials and ensure quality checks throughout all construction phases.",
          },
          {
            title: "Site Coordination & Project Tracking",
            icon: <FaMapMarkedAlt className="text-3xl text-blue-600" />,
            image: "/assets/constr9.jpeg",
            content:
              "Real-time updates, cost transparency, and on-site supervision help clients stay in control of progress from start to handover.",
          },
        ].map(({ title, icon, content, image }, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">{icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-700 leading-relaxed">{content}</p>
            </div>
            <div className="flex-1">
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-indigo-800 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-semibold">
          Start Your Construction Journey with Us
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Let’s design and build a space you’ll be proud of — modern, durable,
          and future-ready.
        </p>
        <Link to="/contact_us">
          <button className="mt-6 bg-white text-indigo-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuildingServices;
