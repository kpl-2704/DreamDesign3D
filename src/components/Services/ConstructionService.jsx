import React from "react";
import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaProjectDiagram,
  FaLeaf,
  FaHardHat,
  FaKey,
} from "react-icons/fa";

const serviceSections = [
  {
    title: "Construction Planning & Site Design",
    icon: <FaDraftingCompass className="text-3xl text-indigo-600" />,
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8f12d92d32?auto=format&fit=crop&w=1170&q=80",
    content:
      "We begin every project with a solid plan. Our team works with you to understand your needs and vision, then develops detailed site designs that meet both functional and aesthetic requirements. All plans comply with local regulations.",
  },
  {
    title: "Efficient Construction Management",
    icon: <FaProjectDiagram className="text-3xl text-indigo-600" />,
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1170&q=80",
    content:
      "Timely project delivery is ensured through robust planning and management tools. Our project managers handle logistics, progress, and communication efficiently.",
  },
  {
    title: "Sustainable Home Construction",
    icon: <FaLeaf className="text-3xl text-green-600" />,
    image:
      "https://images.unsplash.com/photo-1581093588401-1573d736d6c0?auto=format&fit=crop&w=1170&q=80",
    content:
      "We promote eco-friendly design and construction by integrating sustainable materials and practices to minimize carbon footprints and maximize energy efficiency.",
  },
  {
    title: "Quality Assurance & Materials",
    icon: <FaHardHat className="text-3xl text-yellow-600" />,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80",
    content:
      "We use top-grade materials and conduct regular inspections to meet compliance standards, delivering durability and safety in every structure we build.",
  },
  {
    title: "Project Completion & Client Handover",
    icon: <FaKey className="text-3xl text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1170&q=80",
    content:
      "Your satisfaction is our success. Post-completion, we review the build with you and hand over the keys only once every detail meets your expectations.",
  },
];

const ConstructionServices = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Our Construction Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Precision, sustainability, and expert project delivery in every
          structure.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {serviceSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg w-full object-cover h-64"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-indigo-800 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-semibold">
          Let’s Build Your Dream Project
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Get in touch for personalized planning, cost-effective strategies, and
          expert project execution. We’re ready to deliver.
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

export default ConstructionServices;
