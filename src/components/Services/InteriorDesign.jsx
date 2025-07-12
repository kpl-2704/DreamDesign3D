import React from "react";
import { Link } from "react-router-dom";
import {
  FaCouch,
  FaPalette,
  FaLightbulb,
  FaRulerCombined,
} from "react-icons/fa";

const InteriorDesign = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Interior Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Beautiful, functional interiors tailored to your taste, space, and
          budget.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {[
          {
            title: "Custom Interior Planning",
            icon: <FaRulerCombined className="text-3xl text-indigo-600" />,
            image:
              "https://images.unsplash.com/photo-1615874959474-d609969a3a4d?auto=format&fit=crop&w=1170&q=80",
            content:
              "We start with understanding your lifestyle, space utilization needs, and aesthetic vision — translating it into a personalized layout.",
          },
          {
            title: "Color, Texture & Furnishing",
            icon: <FaPalette className="text-3xl text-pink-600" />,
            image:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1170&q=80",
            content:
              "Our team helps select the perfect color palettes, finishes, and textiles that resonate with your brand or personal style.",
          },
          {
            title: "Modular & Space-Saving Solutions",
            icon: <FaCouch className="text-3xl text-yellow-600" />,
            image:
              "https://images.unsplash.com/photo-1622571736190-3a8cd87c358e?auto=format&fit=crop&w=1170&q=80",
            content:
              "We design intelligent modular wardrobes, kitchen units, and furniture layouts that make the most of every inch.",
          },
          {
            title: "Lighting, Decor & Final Styling",
            icon: <FaLightbulb className="text-3xl text-orange-500" />,
            image:
              "https://images.unsplash.com/photo-1616627988476-14c3d5f27b91?auto=format&fit=crop&w=1170&q=80",
            content:
              "The final look is achieved through smart lighting, art, and accessories — creating warmth, contrast, and a complete vibe.",
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

      {/* CTA */}
      <div className="bg-pink-600 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-semibold">
          Let's Design the Interior of Your Dreams
        </h2>
        <p className="mt-4 text-pink-100 max-w-2xl mx-auto">
          Our interior experts are ready to turn your house into a home — or
          your workspace into an experience.
        </p>
        <Link to="/contact_us">
          <button className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InteriorDesign;
