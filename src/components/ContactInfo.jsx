import React from "react";

const ContactInfo = () => {
  return (
    <div className=" p-8 text-black">
      {/* Google Map Embed */}
      <div className="mb-8">
        <iframe
          title="Dream Design 3D Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9390892132016!2d78.2241727!3d21.0012245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4158c430a698b%3A0x3a815550a127816b!2sDream%20Design%203D%20(Construction%20%26%20Architect)!5e0!3m2!1sen!2sin!4v1692002457573!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ml-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-700 rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="telephone">
                Telephone
              </label>
              <input
                id="telephone"
                type="text"
                placeholder="Your Telephone"
                className="w-full border border-gray-700 rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-700 rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-700 rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Address</h2>
          <div className="text-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-400">Our Location:</h3>
              <p>Opposite of Bank Of Baroda Branch, Arvi, Ta. Arvi, Di. Wardha - 442201</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Quick Contact:</h3>
              <p>(+91) 8237872906</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Email:</h3>
              <p>
                <a href="mailto:dreamdesign3d@gmail.com" className="text-gray-400 hover:underline">
                  Dream Design 3D
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Opening Hours:</h3>
              <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
