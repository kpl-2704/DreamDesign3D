import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaComments } from "react-icons/fa";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleWhatsAppClick = () => {
    // Owner's WhatsApp number
    const whatsappNumber = "+918237872906";
    const message = encodeURIComponent(
      "Hi! I'm interested in your 3D design services. Can you help me?"
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      const message = encodeURIComponent(
        "Hi! I'm interested in your 3D design services. Can you help me?"
      );
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
      setPhoneNumber("");
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <FaWhatsapp size={24} />
              <div>
                <h3 className="font-semibold">DreamDesign3D Support</h3>
                <p className="text-sm opacity-90">We're here to help!</p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  👋 Hello! Welcome to DreamDesign3D. How can we help you today?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  💬 Chat on WhatsApp
                </button>

                <div className="text-center text-gray-500 text-xs">OR</div>

                <form onSubmit={handlePhoneSubmit} className="space-y-2">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    📱 Start Chat
                  </button>
                </form>
              </div>

              {/* Services Info */}
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm text-blue-800 mb-2">
                  Our Services:
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 3D Modeling & Visualization</li>
                  <li>• Interior Design</li>
                  <li>• Architectural Design</li>
                  <li>• Product Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
