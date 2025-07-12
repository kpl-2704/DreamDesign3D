import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hello! 👋 I'm your AI assistant for DreamDesign3D. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  const botResponses = {
    greeting: [
      "Hello! Welcome to DreamDesign3D. How can I assist you today?",
      "Hi there! I'm here to help with your 3D design needs. What would you like to know?",
      "Welcome! I can help you with our services, pricing, or connect you with our team.",
    ],
    services: [
      "We offer comprehensive 3D design services:\n\n🏗️ **3D Modeling & Visualization**\n🏠 **Interior Design**\n🏛️ **Architectural Design**\n📦 **Product Design**\n\nWhich service interests you most?",
      "Our services include 3D modeling, interior design, architectural visualization, and product design. What type of project do you have in mind?",
    ],
    pricing: [
      "Our pricing varies based on project complexity and requirements. Could you share more details about your project so I can provide a better estimate?",
      "We offer competitive pricing tailored to your specific needs. What type of project are you looking for?",
    ],
    contact: [
      "I'd be happy to connect you with our team! You can:\n\n📱 **WhatsApp**: +91 8237872906\n📧 **Email**: info@dreamdesign3d.com\n📞 **Phone**: +91 8237872906\n\nWhen would be the best time to reach you?",
      "Great! Our team is available to discuss your project. Would you prefer a call, WhatsApp, or email?",
    ],
    portfolio: [
      "You can view our latest work at our website or I can share specific examples. What type of project are you interested in?",
      "We have an extensive portfolio of 3D designs. Would you like to see residential, commercial, or product design examples?",
    ],
    default: [
      "I'm here to help with any questions about our 3D design services. You can ask about our services, pricing, portfolio, or request to speak with our team.",
      "I can assist you with information about our services, pricing, or connect you with our design team. What would you like to know?",
    ],
  };

  // Service-specific pricing details
  const pricingDetails = {
    "interior design": `💰 Interior Design Pricing:\n\n• Basic: ₹40–150/sq.ft.\n• Mid-range: ₹200–500/sq.ft.\n• Luxury: ₹500–800+/sq.ft.\n• Flat fee: ₹50K–₹10L (home/office)\n• Percentage of project cost: 5–20%\n• 2BHK full home: ₹3L–₹8L; 3BHK: ₹6L–₹15L\n• Modular kitchen: ₹1.5L–₹6L\n• Bedrooms: ₹1.5L–₹5L each; Bathrooms: ₹50K–₹3L each`,
    construction: `🏗️ Construction & Building Services Pricing:\n\n• Residential (basic quality): ₹1,500–1,800/sq.ft.\n• Standard: ₹1,800–2,300/sq.ft.\n• Premium luxury: ₹2,500–3,500+/sq.ft.\n• Materials-only contract: ₹3,000–5,000/sq.ft. (high-end: up to ₹10,000/sq.ft.)`,
    renovation: `🔧 Renovation & Repairs Pricing:\n\n• Based on scope, typically matches construction rates: ₹1,800–3,000/sq.ft. + permit costs`,
    "3d visualization": `🎨 3D Visualizations/Renders Pricing:\n\n• 3D Visualizations/Renders: ₹5K–50K per room\n• VR tours: ₹50K+\n• Visualization (3D + Renders): ₹10K–₹50K per room`,
    "false ceiling": `🧰 False Ceiling Pricing:\n\n• ₹50–200/sq.ft.`,
    painting: `🎨 Painting Pricing:\n\n• ₹15–80/sq.ft. depending on quality`,
    flooring: `🏠 Flooring (tiles/wood) Pricing:\n\n• ₹50–1,500/sq.ft. based on material`,
    "modular wardrobe": `🚪 Modular Wardrobes Pricing:\n\n• ₹70–2,000/sq.ft.`,
    "modular kitchen": `🍽️ Modular Kitchen Pricing:\n\n• ₹1.5L–₹6L`,
  };

  // Helper: find which service is being asked about
  function getServicePricing(message) {
    const keys = Object.keys(pricingDetails);
    for (let key of keys) {
      if (message.includes(key)) {
        return pricingDetails[key];
      }
    }
    // Also handle common variants
    if (message.includes("kitchen")) return pricingDetails["modular kitchen"];
    if (message.includes("wardrobe")) return pricingDetails["modular wardrobe"];
    if (message.includes("ceiling")) return pricingDetails["false ceiling"];
    if (message.includes("paint")) return pricingDetails["painting"];
    if (message.includes("floor")) return pricingDetails["flooring"];
    if (
      message.includes("3d") ||
      message.includes("visualization") ||
      message.includes("render")
    )
      return pricingDetails["3d visualization"];
    return null;
  }

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Service-specific pricing
    if (
      (message.includes("price") ||
        message.includes("cost") ||
        message.includes("pricing")) &&
      getServicePricing(message)
    ) {
      return getServicePricing(message);
    }
    // General pricing question
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("pricing")
    ) {
      return (
        "Here is a quick summary of our main service pricing:\n\n" +
        "• Interior Design: ₹200–800/sq.ft. or ₹6L–₹20L+ (turnkey)\n" +
        "• Construction: ₹1,800–2,500/sq.ft.\n" +
        "• Renovation: ₹1,800–3,000/sq.ft.\n" +
        "• Modular Kitchen: ₹1.5L–6L\n" +
        "• 3D Visuals: ₹10K–₹50K per room\n" +
        "• False Ceilings: ₹50–200/sq.ft.\n" +
        "\nFor detailed pricing, ask about a specific service!"
      );
    }
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return botResponses.greeting[
        Math.floor(Math.random() * botResponses.greeting.length)
      ];
    } else if (
      message.includes("service") ||
      message.includes("what do you do") ||
      message.includes("offer")
    ) {
      return botResponses.services[
        Math.floor(Math.random() * botResponses.services.length)
      ];
    } else if (
      message.includes("contact") ||
      message.includes("speak") ||
      message.includes("team")
    ) {
      return botResponses.contact[
        Math.floor(Math.random() * botResponses.contact.length)
      ];
    } else if (
      message.includes("portfolio") ||
      message.includes("work") ||
      message.includes("examples")
    ) {
      return botResponses.portfolio[
        Math.floor(Math.random() * botResponses.portfolio.length)
      ];
    } else {
      return botResponses.default[
        Math.floor(Math.random() * botResponses.default.length)
      ];
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "+918237872906"; // Owner's WhatsApp number
    const message = encodeURIComponent(
      "Hi! I'm interested in your 3D design services. Can you help me?"
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Chat Bot Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Chat Bot"
        >
          {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
        </button>
      </div>

      {/* Chat Bot Widget */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaRobot size={24} />
                <div>
                  <h3 className="font-semibold">DreamDesign3D AI</h3>
                  <p className="text-sm opacity-90">Your 3D Design Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>

            {/* WhatsApp Redirect Button */}
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <FaWhatsapp size={16} />
              <span>Continue on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
