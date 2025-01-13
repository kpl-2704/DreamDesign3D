import React from "react";

const QuoteRequest = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-8 rounded-md shadow-lg ">
      <h2 className="text-xl font-bold mb-4">Request A Quote</h2>
      <p className="mb-4 text-sm text-gray-600">
        Complete control over products allows us to offer our customers the best quality, prices, and services. We take great
        pride in everything that we do.
      </p>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="p-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <select
            className="p-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select Your Service
            </option>
            <option value="construction">Construction</option>
            <option value="architecture">Architecture</option>
          </select>
        </div>
        <textarea
          placeholder="Additional Details"
          className="w-full p-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
          rows="3"
        />
        <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default QuoteRequest;
