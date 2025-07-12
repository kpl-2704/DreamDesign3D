import React from "react";

const Experience = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Block */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-black leading-tight">
            Over <span className="text-indigo-600">5+ Years</span> of Industry
            Excellence
          </h2>
          <p className="mb-6 text-gray-600 text-lg leading-relaxed">
            We specialize in delivering architectural designs, smart
            renovations, and reliable construction work — on time and with
            quality.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
            <div className="bg-indigo-100 text-indigo-800 px-5 py-3 rounded-lg font-semibold shadow-sm">
              50+ Projects Completed
            </div>
            <div className="bg-green-100 text-green-800 px-5 py-3 rounded-lg font-semibold shadow-sm">
              Certified & Trusted Team
            </div>
          </div>
        </div>

        {/* Image Block */}
        <div className="flex-1">
          <img
            src="https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg"
            alt="Under construction"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
