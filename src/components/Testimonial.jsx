import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Our Client Says</h2>
        <p className="text-sm md:text-lg italic mb-6 text-gray-600">
          "I am very satisfied with the services. Their team is very professional and efficient in completing our project on
          time and at a very affordable cost. The quality of their work is very good, and I highly recommend this company for
          any construction project."
        </p>
        <h3 className="font-semibold text-lg">Tom Delonge</h3>
        <p className="text-sm text-gray-500">CEO, Lexmark</p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">Prev</button>
          <div className="flex gap-2">
            {/* Placeholders for profile images */}
            <div className="w-8 h-8 bg-gray-400 rounded-full" />
            <div className="w-8 h-8 bg-gray-400 rounded-full" />
            <div className="w-8 h-8 bg-gray-400 rounded-full" />
          </div>
          <button className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
