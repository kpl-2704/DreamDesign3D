import React from "react";

const Experience = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg"
            alt="Engineers"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-6">
            5+ years
            <br />
            of experience!
          </h2>
          <p className="mb-8 text-gray-600">
            We have a history of successful construction projects that have been in the industry for over 5 years. Our
            contractors have a wealth of knowledge and skills that they have acquired over the years, making them experts in
            their field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
