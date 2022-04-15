require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio'); // npm i twilio
const client = new twilio(accountSid, authToken);

const sendRestaurantMessage = function() {
  console.log("sending message...");
  client.messages
    .create({
      body: "Alert: A customer has placed an order! Please head over to the admin page to accept and provide an estimated wait time.",
      from: process.env.TWILIO_NUMBER,
      to: "+16478956858"
    })
    .then(message => console.log("message id: " + message.sid))
    .catch(err => {
      console.log(err);
    });
};

const sendCustomerMessage = (name, phone, waitTime) => {
  console.log("sending message...");
  client.messages
    .create({
      body: `Hi ${name},Your order has been accepted! Estimated wait time: ${waitTime} minutes.`,
      from: process.env.TWILIO_NUMBER,
      to: phone
    })
    .then(message => console.log("message id: " + message.sid))
    .catch(err => {
      console.log(err);
    });
};

sendRestaurantMessage();
sendCustomerMessage('Julia', '+16478956858', '15');

module.exports = { sendRestaurantMessage, sendCustomerMessage };
