import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
} from "./../controllers/tourController.js";

const router = express.Router();

// Create new tour (POST)
router.post("/", createTour);

// Update a tour (PUT)
router.put("/:id", updateTour);

// Delete a tour (DELETE)
router.delete("/:id", deleteTour);

// Get a single tour by ID (GET)
router.get("/:id", getSingleTour);

// Get all tours (GET)
router.get("/", getAllTour); // Changed from POST to GET

export default router;
