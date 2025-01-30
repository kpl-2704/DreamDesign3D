import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-4">
      <div className="h-40 bg-black flex items-center justify-center mb-6">
        <h1 className="text-4xl font-bold text-white  text-center mb-8">
          About <br />
          Dream Design 3D
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <strong>Dream Design 3D</strong> a construction and architectural firm! Located{" "}
          <strong>opposite the Bank Of Baroda Branch, Arvi, Ta. Arvi, Di. Wardha - 442201</strong>, we are proud to provide
          top-notch services in construction, architecture, building, renovation, interior design, 3D floor plans, and 3D
          elevation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          With over <strong>5 years of experience</strong> in the industry, our team of skilled professionals is dedicated to
          delivering excellence and innovation in every project we undertake. Whether it’s creating a stunning 3D elevation or
          bringing your dream home to life, we combine creativity, technical expertise, and a commitment to quality.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to transform your vision into reality with precision and attention to detail. From concept to
          completion, we ensure every step of the process is seamless and tailored to your unique requirements.
        </p>
        <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Expertise in construction and architectural design.</li>
          <li>Comprehensive services including renovation and interior design.</li>
          <li>Advanced 3D planning for accurate visualizations.</li>
          <li>Customer-centric approach to ensure satisfaction.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          Contact us today to discuss your project and see how we can help bring your ideas to life. Let’s build something
          extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
