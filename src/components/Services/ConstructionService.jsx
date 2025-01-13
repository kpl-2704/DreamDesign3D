import React from "react";
import { Link } from "react-router-dom";

const ConstructionServices = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center py-12 bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Our Construction Services</h1>
        <p className="mt-4 text-lg text-white">Delivering precision and expertise in every project we undertake.</p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Construction Planning & Site Design</h2>
          <p className="text-gray-700">
            We begin every project with a solid plan. Our team works with you to understand your needs and vision, then develops
            detailed site designs that meet both functional and aesthetic requirements. We ensure that all plans comply with
            local regulations, offering a clear path for the entire construction journey.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Efficient Construction Management</h2>
          <p className="text-gray-700">
            Effective construction management is key to delivering projects on time and within budget. We utilize modern project
            management tools to track progress, address challenges, and ensure seamless communication between all parties
            involved. We manage every step of the process to ensure efficiency and success.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Sustainable Home Construction</h2>
          <p className="text-gray-700">
            Sustainability is at the core of what we do. We integrate green building practices into each project, using
            eco-friendly materials and energy-efficient systems. Our goal is to reduce energy costs and environmental impact,
            while creating homes that are both beautiful and sustainable.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Quality Assurance & Materials</h2>
          <p className="text-gray-700">
            We take quality seriously. From selecting the best materials to overseeing every phase of construction, we ensure
            that all work meets our rigorous standards. We also comply with local building codes, ensuring the durability and
            safety of every structure.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Project Completion & Client Handover</h2>
          <p className="text-gray-700">
            After construction is completed, we conduct a final inspection to ensure everything meets your expectations. We walk
            you through the space, explain its features, and answer any questions. Our goal is to deliver a project that aligns
            with your vision, ensuring you are completely satisfied before we hand over the keys.
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 py-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Ready to turn your project into reality?</h2>
        <p className="mt-4 text-white">
          Let us guide you through every step of your construction journey, from planning to completion.
        </p>
        <button className="mt-6 bg-white text-gray-900 px-6 py-2 rounded-md">
          <Link to={"/contact_us"}>Get in Touch</Link>
        </button>
      </div>
    </div>
  );
};

export default ConstructionServices;
