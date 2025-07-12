import React, { useState } from "react";
import emailjs from "emailjs-com";

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      details: formData.details,
      to_email: "dreamdesign008@gmail.com",
    };

    emailjs
      .send(
        "service_9czohm7", // ✅ Replace with your EmailJS service ID
        "template_l7rvbho", // ✅ Replace with your EmailJS template ID
        emailParams,
        "p6ooBCmu3n-ZnGhqN" // ✅ Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Your request has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            details: "",
          });
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send the request. Please try again.");
        }
      );
  };

  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="max-w-3xl mx-auto px-6 bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Request a Project Quote
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="construction">Construction</option>
              <option value="architecture">Architecture</option>
              <option value="3D Plan">3D Plan</option>
            </select>
          </div>

          <textarea
            name="details"
            rows="4"
            placeholder="Tell us about your project..."
            value={formData.details}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteRequest;
