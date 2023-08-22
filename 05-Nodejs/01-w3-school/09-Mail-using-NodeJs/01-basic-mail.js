import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
    auth: {
        user: 'your_email@gmail.com', // Your email address
        pass: 'your_email_password' // Your email password or an app-specific password
    }
});

// Setup email data
const mailOptions = {
    from: 'your_email@gmail.com', // Sender's email address
    to: 'recipient@example.com', // Recipient's email address
    subject: 'Hello from Node.js!', // Subject line
    text: 'This is a test email sent from Node.js using nodemailer.', // Plain text body
    html: '<p>This is a <b>test</b> email sent from <i>Node.js</i> using <strong>nodemailer</strong>.</p>' // HTML body
};

// Send email using the transporter
transporter.sendMail(mailOptions)
    .then(info => {
        console.log('Email sent:', info.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
