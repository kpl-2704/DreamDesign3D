import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-black">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-50" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            We Prepare
            <br />
            For The <span className="text-orange-500">Future</span>
          </h1>
          <p className="mb-8 text-lg">
            We provide the best architectural design, construction, and building maintenance services to you.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600">Our Services</button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">View Project</button>
          </div>
          <div className="mt-12 space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <p>Quality Control System, 100% Satisfaction Guarantee</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <p>Highly Professional Staff, Accurate Testing Processes</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <p>Unrivalled Workmanship, Professional and Qualified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
