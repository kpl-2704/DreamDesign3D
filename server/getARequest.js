const twilio = require("twilio");

const accountSid = "ACf87c13e24c1b93e9a3d650ddcc60251c"; // Replace with your Twilio Account SID
const authToken = "6afaa14900e0f4d8fdf25a445970f4ff"; // Replace with your Twilio Auth Token
const client = twilio(accountSid, authToken);

client.messages
  .create({
    body: "You have received a new enquiry: Name - John Doe, Service - Construction",
    from: "+18455938915", // Your Twilio trial number
    to: "+917775882602", // The recipient's number
  })
  .then((message) => console.log("Message sent:", message.sid))
  .catch((err) => console.error("Error:", err));
