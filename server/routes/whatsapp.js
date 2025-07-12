const express = require("express");
const router = express.Router();
const twilio = require("twilio");

// Initialize Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// WhatsApp webhook endpoint
router.post("/webhook", (req, res) => {
  const { Body, From, To } = req.body;

  console.log("WhatsApp message received:", { Body, From, To });

  // Simple bot responses
  let response = "";

  const message = Body.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    response = "Hello! Welcome to DreamDesign3D. How can I help you today?";
  } else if (
    message.includes("services") ||
    message.includes("what do you do")
  ) {
    response =
      "We offer 3D design services including:\n• 3D Modeling\n• Interior Design\n• Architectural Visualization\n• Product Design\n\nWould you like to know more about any specific service?";
  } else if (
    message.includes("pricing") ||
    message.includes("cost") ||
    message.includes("price")
  ) {
    response =
      "Our pricing varies based on project complexity. Please share your project details and I'll connect you with our team for a custom quote.";
  } else if (
    message.includes("contact") ||
    message.includes("speak to someone")
  ) {
    response =
      "I'll connect you with our team right away. Please share your name and preferred contact time.";
  } else if (message.includes("portfolio") || message.includes("work")) {
    response =
      "You can view our portfolio at our website. Would you like me to send you the link?";
  } else {
    response =
      "Thank you for your message! I'm here to help with any questions about our 3D design services. You can ask about our services, pricing, or request to speak with our team.";
  }

  // Send response back via WhatsApp
  client.messages
    .create({
      body: response,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: From,
    })
    .then((message) => {
      console.log("Response sent:", message.sid);
      res.status(200).send("OK");
    })
    .catch((err) => {
      console.error("Error sending WhatsApp message:", err);
      res.status(500).send("Error");
    });
});

// Get WhatsApp verification token
router.get("/webhook", (req, res) => {
  const {
    "hub.mode": mode,
    "hub.verify_token": token,
    "hub.challenge": challenge,
  } = req.query;

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    console.log("WhatsApp webhook verified");
    res.status(200).send(challenge);
  } else {
    res.status(403).send("Forbidden");
  }
});

module.exports = router;
