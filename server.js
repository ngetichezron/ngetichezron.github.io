const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create transporter for sending email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ngetichezron4@gmail.com', 
      pass: '@#Ezron*#' 
    }
  });

  // Create email message
  const mailOptions = {
    from: email,
    to: 'ngetichezron4@gmail.com', 
    subject: subject,
    text: `${name} (${email}) says: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.json({ success: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
