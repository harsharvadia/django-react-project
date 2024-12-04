const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // or any port you prefer

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/send-email', async (req, res) => {
  const {email} = req.body;

  // Set up the transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // or use SMTP details
    auth: {
      user: 'arvadiadeep@gmail.com', // Your email
      pass: 'oqsx adoh bigf lxxv', // Your email password
    },
  });

  // Email options
  let mailOptions = {
    from: 'arvadiadeep@gmail.com', // sender address
    to: email, // receiver from the form
    subject: 'GADGETGROOVE CONTACT ', // Subject line
    html:`<h3>Gadget Groove</h3>
    <pre>Hello sir/ma'am Thank you for contacting us(Gadget Groove)
    Please tell us your query by replying this mail`
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});