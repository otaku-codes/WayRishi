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
      to: "himanshupapola.ph@gmail.com", // Change to the recipient's email
      subject: "New Booking Confirmation",
      text: `Your tour is booked successfully!\n\nBooking Details:\n${JSON.stringify(
        savedBooking,
        null,
        2
      )}`,
    };

    // Send the email
    // await transporter.sendMail(mailOptions);
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
