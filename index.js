const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const output = require("./affirmations")


// Create an instance of Express
app = express();

// Creating the initial message
let affirmation;
let message= `Corinna,\n\n${affirmation}\n\nI love you millions.\n\nHave a great day!`
let mailOptions = {
    from: 'cameronwfinney@gmail.com',
    to: process.env.BOO_EMAIL,
    subject: 'Email from your boo: Keep going!',
    text: message,
  };
// Creating a reset function
function resetMessage() {
    affirmation = output()
    message = `Corinna,\n\n${affirmation}\n\nI love you millions.\n\nHave a great day!`
    mailOptions = {
        from: 'cameronwfinney@gmail.com',
        to: process.env.BOO_EMAIL,
        subject: 'Email from Node-App: A Test Message!',
        text: message,
      };
}
// Reseting the message / setting the first message
resetMessage();
// Reseting the message / setting the message every 43200000 (12 hours) seconds
setInterval(resetMessage,900)


// Mail transport configuration

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cameronwfinney@gmail.com',
      pass: process.env.GMAIL_PASS,
    },
  });


cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Process');
    console.log('Tasked scheduled with 1 minute interval')

// Delivering mail with sendMail method

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
});

app.listen(3000, function(err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 3000"); 
});