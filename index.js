const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const output = require("./affirmations");
const PORT = process.env.PORT || 3000;

// Create an instance of Express
app = express();

// Creating the initial messages
let affirmation;
let message = `${process.env.YOUR_BOO_NAME},\n\n${affirmation}\n\nI love you millions.\n\nHave a great day!\n\n${process.env.YOUR_NAME}`;
let mailOptions = {
  from: process.env.YOUR_EMAIL,
  to: process.env.BOO_EMAIL,
  subject: "Email from your boo: Keep going!",
  text: message,
};
let message2 = `${process.env.BOO_2},\n\n${affirmation}\n\nKeep on trucking!\n\n${process.env.YOUR_NAME}`;
let mailOptions2 = {
  from: process.env.YOUR_EMAIL,
  to: process.env.BOO_2_EMAIL,
  subject: "Keep going!",
  text: message2,
};
// Creating a reset function
function resetMessage() {
  affirmation = output();
  message = `${process.env.YOUR_BOO_NAME},\n\n${affirmation}\n\nI love you millions.\n\nHave a great day!\n\n${process.env.YOUR_NAME}`;
  mailOptions = {
    from: process.env.YOUR_EMAIL,
    to: process.env.BOO_EMAIL,
    subject: "Email from your boo: Keep going!",
    text: message,
  };
  affirmation = output();
  message2 = `${process.env.BOO_2},\n\n${affirmation}\n\nKeep on trucking!\n\n${process.env.YOUR_NAME}`;
  mailOptions2 = {
    from: process.env.YOUR_EMAIL,
    to: process.env.BOO_2_EMAIL,
    subject: "Keep going!",
    text: message2,
  };
}
// Resetting the message / setting the first message
resetMessage();
// Resetting the message / setting the message every 43200000 (12 hours) seconds
setInterval(resetMessage, 43200000);

// Mail transport configuration

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.YOUR_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

cron.schedule("50 9 * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Process");
  console.log("Tasked scheduled with 1 minute interval");

  // Delivering mail with sendMail method

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log("Email sent: " + info.response);
  });
  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) console.log(error);
    else console.log("Email sent: " + info.response);
  });
});

// Adding post route for some default html
app.get("/", (req, res) => {
  res.sendFile("./home.html", { root: __dirname });
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
