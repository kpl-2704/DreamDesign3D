import React from "react";
import { Link } from "react-router-dom";
import {
  FaHammer,
  FaRecycle,
  FaPaintRoller,
  FaHouseDamage,
} from "react-icons/fa";

const RenovationServices = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Home & Commercial Renovation
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Revamp your space with smart, aesthetic, and durable renovation
          solutions tailored to your needs.
        </p>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {[
          {
            title: "Structural Repairs & Upgrades",
            icon: <FaHouseDamage className="text-3xl text-red-600" />,
            image:
              "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd8?auto=format&fit=crop&w=1170&q=80",
            content:
              "We fix water damage, cracks, termite issues, roof leaks, and foundation wear with professional-grade materials and workmanship.",
          },
          {
            title: "Remodeling & Space Reconfiguration",
            icon: <FaHammer className="text-3xl text-indigo-600" />,
            image:
              "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1170&q=80",
            content:
              "Upgrade your kitchen, bathrooms, or entire floor plans. We remove walls, expand spaces, and rebuild layouts to suit your lifestyle.",
          },
          {
            title: "Wall Finishes, Flooring & Paint",
            icon: <FaPaintRoller className="text-3xl text-yellow-600" />,
            image:
              "https://images.unsplash.com/photo-1633966882899-9b13e92c4693?auto=format&fit=crop&w=1170&q=80",
            content:
              "From stylish wall finishes to high-durability tile/wood flooring, we help you choose and apply surfaces that uplift aesthetics and comfort.",
          },
          {
            title: "Sustainable & Smart Renovations",
            icon: <FaRecycle className="text-3xl text-green-600" />,
            image:
              "https://images.unsplash.com/photo-1582560473533-8124b313f365?auto=format&fit=crop&w=1170&q=80",
            content:
              "We upgrade your space with LED lighting, thermal insulation, and sustainable practices — making your building eco-friendly and cost-efficient.",
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
                className="rounded-lg shadow-lg w-full object-cover h-64"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-semibold">Give Your Space a New Life</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          From design to execution, our experts manage every step — ensuring
          smooth, clean, and timely renovations.
        </p>
        <Link to="/contact_us">
          <button className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Request a Renovation Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RenovationServices;
