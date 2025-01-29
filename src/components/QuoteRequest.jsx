import React, { useState } from "react";
import emailjs from "emailjs-com";

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      details: formData.details,
      to_email: "dreamdesign008@gmail.com" // Recipient email
    };

    emailjs
      .send(
        "service_zvqu5q8", // Replace with your EmailJS Service ID
        "template_l7rvbho", // Replace with your EmailJS Template ID
        emailParams,
        "p6ooBCmu3n-ZnGhqN" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          alert("Your request has been sent successfully!");
        },
        error => {
          console.error("Error:", error);
          alert("Failed to send the request. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-100 text-gray-800 p-8 rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4">Request A Quote</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-2 bg-white border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select Your Service
            </option>
            <option value="construction">Construction</option>
            <option value="architecture">Architecture</option>
            <option value="3D Plan">3D Plan</option>
          </select>
        </div>
        <textarea
          name="details"
          placeholder="Additional Details"
          value={formData.details}
          onChange={handleChange}
          className="w-full p-2 bg-white border border-gray-300 rounded-md"
          rows="3"
          required
        />
        <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default QuoteRequest;
