import ReactDOMServer from "react-dom/server";
import EmailConfirmation from "@/template/email";
import nodemailer from "nodemailer";

const emailuser = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

// console.log("EMAIL_USER:", emailuser);
// console.log("EMAIL_PASS:", pass);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server
      port: 587,
      secure: false,
      auth: {
        user: emailuser,
        pass: pass
      },
    });

    // Render the JSX to HTML
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      <EmailConfirmation name={fullName} email={email} message={message} />
    );

    // Email options
    const mailOptions = {
      from: email, 
      replyTo: email, 
      to: emailuser, // Owner's email address
      subject: `New Message Submitted via balkhabra ${fullName}`,
      text: message, // Plain text body
      html: emailHtml, // Rendered HTML body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send the message." });
  }
}
