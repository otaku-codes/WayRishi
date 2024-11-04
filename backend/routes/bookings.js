import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Route to create a booking
router.post("/", verifyUser, createBooking);

// Route to get a single booking by ID
router.get("/:id", verifyUser, getBooking);

// Route to get all bookings
router.get("/", verifyUser, getAllBooking);

export default router;
