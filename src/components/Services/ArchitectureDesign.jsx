import React from "react";
import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaBuilding,
  FaGavel,
  FaClipboardCheck,
} from "react-icons/fa";

const ArchitectureDesign = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Architectural Design Services
        </h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          Innovative, efficient, and regulation-ready architectural solutions
          that shape lasting impressions.
        </p>
      </div>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {[
          {
            title: "Conceptual Design & Space Planning",
            icon: <FaDraftingCompass className="text-3xl text-indigo-600" />,
            image: "/assets/arch1.png",
            content:
              "We begin with form, function, and vision — producing schematic drawings and floor plans that establish design intent and usability.",
          },
          {
            title: "3D Visualization & Walkthroughs",
            icon: <FaBuilding className="text-3xl text-green-600" />,
            image: "/assets/arch2.png",
            content:
              "Our lifelike renderings and virtual tours help clients visualize the final output before construction even begins.",
          },
          {
            title: "Sanction Drawings & Compliance",
            icon: <FaGavel className="text-3xl text-red-600" />,
            image: "/assets/arch3.png",
            content:
              "We handle building sanction approvals, ensuring your plans are aligned with DTP, municipality, or development authority norms.",
          },
          {
            title: "Execution Drawings & BOQs",
            icon: <FaClipboardCheck className="text-3xl text-yellow-500" />,
            image: "/assets/arch4.png",
            content:
              "Detailed working drawings, sections, elevations, and material quantity estimates are delivered to support site execution.",
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
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-800 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-semibold">
          Design with Intent. Build with Confidence.
        </h2>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Our architects blend creativity and compliance — delivering blueprints
          that are stunning, sustainable, and functional.
        </p>
        <Link to="/contact_us">
          <button className="mt-6 bg-white text-indigo-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Request Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArchitectureDesign;
