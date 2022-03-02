const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {user: config.user.email,
    pass: config.user.password},
});

const mailOptions = {from: "Arc Development",
  to: "muhammadhullah23@gmail.com",
  subject: "Testing nodemailer",
  text: "Test Successful"};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Message sent successfully");
    }
  });
});
