const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

app.post('/api/contact', (req, res) => {
  const { name, company, emailPhone, category, details } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: `🚀 INCCINNOVATION - Nayi Inquiry: ${category}`,
    text: `
      Nayi Inquiry ki Details:
      -------------------------------------------
      👤 Naam: ${name}
      🏢 Company: ${company || 'N/A'}
      📞 Contact: ${emailPhone}
      📁 Category: ${category}
      
      📝 Message / Details:
      ${details}
      -------------------------------------------
      Inccinnovation Auto-Mail System
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).json({ success: false, message: 'Server email nahi bhej paya.' });
    } else {
      console.log('Email successfully bhej diya gaya hai: ' + info.response);
      return res.status(200).json({ success: true, message: 'Inquiry successfully received!' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Server port ${PORT} par live hai 🚀`);
});
