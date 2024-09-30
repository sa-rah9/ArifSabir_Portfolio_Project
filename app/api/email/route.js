import nodemailer from 'nodemailer';

export async function POST(req ) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, message } = body;

    // Log to check if environment variables are loaded
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    // Create the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Ensure it's cast as a string
        pass: process.env.EMAIL_PASS, // Ensure it's cast as a string
      },
    });

    // Compose the email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: 'rogerkhan2006@gmail.com', // Your receiving email address
      subject: `New Form Submission from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color: #ffff;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498DB;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <br/>
          <p style="color: #888; font-size: 12px;">This email was automatically generated from your contact form.</p>
        </div>
      `,
    };

    // Use .then() and .catch() to send email
    return transporter.sendMail(mailOptions)
      .then((info) => {
        console.log('Message sent: %s', info.messageId);

        // Return success response
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.message, error.stack);

        // Return error response
        return new Response(JSON.stringify({ error: `Error sending email: ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      });
  } catch (error) {
    console.error('Error processing request:', error.message, error.stack);

    // Return error response for request parsing issues
    return new Response(JSON.stringify({ error: `Error processing request: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
