const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000; // Change this if your React app runs on the same port

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail for this example
    auth: {
        user: 'Sekoukosiah82@gmail.com',
        pass: 'Sekou8282'
    }
});

app.post('/send-email', (req, res) => {
    const { email, firstName, lastName } = req.body;
    
    const mailOptions = {
        from: 'SekouKosiah82@gmail.com',
        to: email, // or any other recipient
        subject: 'New Sign-In Notification',
        html: `<h1>New Sign-In Detected</h1>
               <p>Hi Admin,</p>
               <p>${firstName} ${lastName} has just signed up.</p>
               <p>Contact them back on: <a href="mailto:${email}">${email}</a></p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
