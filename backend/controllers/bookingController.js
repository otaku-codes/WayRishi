import Bookings from "../models/Bookings.js";
import nodemailer from "nodemailer"; // Import Nodemailer

// Create a transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himanshupapola.ph@gmail.com", // Your Gmail address
    pass: "guydhyoufbvcocck", // Your App Password
  },
});

export const createBooking = async (req, res) => {
  const newBooking = new Bookings(req.body);
  try {
    const savedBooking = await newBooking.save();

    // Define email parameters
    const mailOptions = {
      from: "himanshupapola.ph@gmail.com", // Sender address
      to: "realtrickswizard@gmail.com", // Change to the recipient's email
      subject: "New Booking Confirmation",
      // Use the new HTML format for the email
      html: `
        <div style="text-align: center;">
          <h2>Booking Confirmation</h2>
          <p>Your tour is booked successfully!</p>
          <table style="margin: 0 auto; border-collapse: collapse; width: 50%; text-align: left;">
            <tr>
              <th style="padding: 8px; border-bottom: 1px solid #ddd;">Booking Details</th>
              <th></th>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Full Name</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${savedBooking.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Tour Name</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${savedBooking.tourName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Email</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${savedBooking.userEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Guest Size</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${savedBooking.guestSize}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Phone</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${savedBooking.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">Booking Date</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(savedBooking.bookAt).toLocaleDateString()}</td>
            </tr>
          </table>
        </div>
      `,
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Bookings.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

// Get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const books = await Bookings.find();

    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
