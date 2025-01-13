import React from "react";

const Stats = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 flex justify-around">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500">5+</div>
          <div className="text-sm">Years of Experience</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500">2000+</div>
          <div className="text-sm">Project Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500">10+</div>
          <div className="text-sm">Active Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
