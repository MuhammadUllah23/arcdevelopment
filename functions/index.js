const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({origin: true});

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

const mailOptions = {
  from: "Arc Development",
};
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message } = request.query

    mailOptions = {
      from: "Arc Development",
      to: "muhammadhullah23@gmail.com",
      subject: "Message Received!",
      html: `
        <p style="sont-size: 16px">From: ${name}</p>
        <p style="sont-size: 16px">From: ${email}</p>
        <p style="sont-size: 16px">From: ${phone}</p>
        <p style="sont-size: 16px">From: ${message}</p>
        `};

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
