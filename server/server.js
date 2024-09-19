import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    // Configure the email transport using Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'audioapp655@gmail.com',
        pass: 'ayce bcsd sheh wwsi', 
      },
    });

    // Email content
    let mailOptions = {
      from: email,
      to: 'audioapp655@gmail.com', 
      subject: `New Contact Message from ${firstName} ${lastName}`,
      text: `You have a new message:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ code: 200, message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ code: 500, message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}