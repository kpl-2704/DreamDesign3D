import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good, and I highly recommend this company for any construction project.",
    name: "Atul Waghmare",
    designation: "Dentist, Sai Nagar, Arvi"
  },
  {
    quote: "The team provided exceptional service and delivered our project beyond expectations. Highly recommended!",
    name: "Rajesh Sharma",
    designation: "Business Owner, Delhi"
  },
  {
    quote: "Their expertise in construction is outstanding. Our home renovation was seamless and stress-free.",
    name: "Pooja Mehta",
    designation: "Architect, Mumbai"
  },
  {
    quote:
      "Their expertise in construction is outstanding. Their service is excellent and also too much budget-friendly, Will suggest to take a chance to work with them.",
    name: "Ashok Mehta",
    designation: "Software Developer, Mumbai"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-sm md:text-lg italic mb-6 text-gray-600">"{testimonials[currentIndex].quote}"</p>
        <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
        <p className="text-sm text-gray-500">{testimonials[currentIndex].designation}</p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div key={index} className={`w-8 h-8 rounded-full ${currentIndex === index ? "bg-gray-700" : "bg-gray-400"}`} />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
