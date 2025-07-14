import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_BASE = process.env.REACT_APP_API_BASE || "";

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/admin/testimonials/public`
        );
        setTestimonials(res.data);
      } catch (err) {
        setTestimonials([]);
      }
    };
    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  if (!testimonials.length) {
    return (
      <section className="bg-gray-100 py-16 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-all duration-500 ease-in-out text-center">
            <p className="text-lg italic text-gray-600 mb-6">
              No testimonials available yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 py-16 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-all duration-500 ease-in-out">
          <p className="text-lg italic text-gray-600 mb-6">"{current.quote}"</p>
          <h3 className="text-xl font-semibold text-gray-900">
            {current.clientName}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {current.project?.title || "Client"}
          </p>
          {typeof current.rating === "number" && (
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < current.rating ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {current.rating}/5
              </span>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition"
              disabled={testimonials.length < 2}
            >
              ← Prev
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentIndex ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition"
              disabled={testimonials.length < 2}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
