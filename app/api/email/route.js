import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, message } = body;

    // Log to check if environment variables are loaded
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Replace with your Gmail email
        pass: process.env.EMAIL_PASS, // Replace with your Gmail password or app-specific password
      },
    });

    // Log to check if transporter is correctly configured
    console.log('Transporter created:', transporter);

    // Compose email
    const mailOptions = {
      from: email,
      to: 'sarah.geo7@gmail.com', // Your receiving email
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Log the response from Nodemailer
    console.log('Message sent: %s', info.messageId);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
