import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594944085576-6adf46f8ac0d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
          About Dream Design 3D
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Text Content */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <strong>Dream Design 3D</strong>, your trusted partner in
            construction and architectural innovation. Based{" "}
            <strong>
              opposite the Bank Of Baroda Branch, Arvi, Ta. Arvi, Di. Wardha –
              442201
            </strong>
            , we specialize in delivering high-quality services including
            construction, architectural design, building planning, renovation,
            interior styling, 3D plans, and elevation visuals.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With over <strong>5 years of experience</strong>, we combine design
            excellence, technical precision, and practical implementation to
            bring your vision to life. Whether it’s a dream home or a commercial
            facility, our team ensures quality from foundation to finish.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to deliver personalized, durable, and visually
            striking spaces while maintaining a transparent and seamless process
            for our clients.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Expertise in construction and architectural design.",
              "Comprehensive services including renovation and interior design.",
              "Advanced 3D planning for real-time visualizations.",
              "Customer-first approach ensuring timely delivery and satisfaction.",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Office/Architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
