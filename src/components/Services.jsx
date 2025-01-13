import React from "react";

const ServiceCard = ({ title, number }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer">
      <div className="text-sm text-gray-400 mb-2">{number}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="w-12 h-1 bg-orange-500" />
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-6">
          <ServiceCard title="Schedule a Meeting With Us And Discuss The Your Requirement" number="01" />
          <ServiceCard title="Plan,Design,Sanction & Preparation Of The Work Site" number="02" />
          <ServiceCard title="Implementation Of Quality Works" number="03" />
          <ServiceCard title="Delivering The Project To The Customer" number="04" />
        </div>
      </div>
    </div>
  );
};

export default Services;
