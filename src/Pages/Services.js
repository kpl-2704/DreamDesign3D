import React from "react";
import {
  FaCouch,
  FaDraftingCompass,
  FaRulerCombined,
  FaPagelines,
  FaCubes,
  FaHardHat,
  FaTools,
  FaYinYang,
} from "react-icons/fa";

const serviceList = [
  {
    title: "Interior Design",
    description:
      "Our interior design services enhance your space with style and functionality — from furniture layouts to lighting and color palettes.",
    icon: <FaCouch />,
  },
  {
    title: "Exterior 3D Elevation",
    description:
      "Visualize your building with realistic 3D elevation renderings before construction even begins.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Structural Drawings",
    description:
      "Detailed structural plans ensuring safety, stability, and compliance with engineering codes.",
    icon: <FaRulerCombined />,
  },
  {
    title: "Building Planning as per Vastu",
    description:
      "We align your home with ancient Vastu principles to promote harmony and prosperity.",
    icon: <FaYinYang />,
  },
  {
    title: "Landscaping",
    description:
      "Turn your outdoor space into an elegant, serene environment with our custom landscape designs.",
    icon: <FaPagelines />,
  },
  {
    title: "3D Cut Plan",
    description:
      "Cross-sectional 3D visuals that provide insight into interior layouts and spatial organization.",
    icon: <FaCubes />,
  },
  {
    title: "Building Construction & Supervision",
    description:
      "End-to-end construction services including on-site supervision to maintain timelines and quality.",
    icon: <FaHardHat />,
  },
  {
    title: "Repair and Maintenance Work",
    description:
      "Timely repairs and ongoing maintenance to ensure your property remains safe and pristine.",
    icon: <FaTools />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="text-center py-16 bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We offer a wide range of professional services in architecture,
          design, and construction to bring your vision to life with precision
          and care.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center mb-4 text-indigo-600 text-3xl">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
