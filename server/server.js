const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Nodemailer configuration
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'audioapp655@gmail.com',
    pass: 'ayce bcsd sheh wwsi', 
  },
});

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'audioapp655@gmail.com', // Send the email to yourself
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ code: 500, message: 'Internal Server Error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
