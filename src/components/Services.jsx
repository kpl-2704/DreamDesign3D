import React from "react";
import { Link } from "react-router-dom";
import {
  FaHardHat,
  FaBuilding,
  FaCouch,
  FaDraftingCompass,
  FaPaintRoller,
} from "react-icons/fa";

const serviceList = [
  {
    title: "Construction",
    route: "/construction",
    icon: <FaHardHat className="text-3xl text-indigo-600 mb-2" />,
    number: "01",
  },
  {
    title: "Building",
    route: "/building",
    icon: <FaBuilding className="text-3xl text-green-600 mb-2" />,
    number: "02",
  },
  {
    title: "Interior Design",
    route: "/interior",
    icon: <FaCouch className="text-3xl text-pink-600 mb-2" />,
    number: "03",
  },
  {
    title: "Architecture",
    route: "/architect",
    icon: <FaDraftingCompass className="text-3xl text-yellow-600 mb-2" />,
    number: "04",
  },
  {
    title: "Renovation",
    route: "/renovate",
    icon: <FaPaintRoller className="text-3xl text-orange-500 mb-2" />,
    number: "05",
  },
];

const ServiceCard = ({ title, route, icon, number }) => {
  return (
    <Link to={route} className="block">
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer h-full flex flex-col items-center text-center">
        <div>{icon}</div>
        <div className="text-sm  mb-2">{number}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="w-12 h-1 bg-orange-500" />
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center tracking-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {serviceList.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
