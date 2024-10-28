import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new tour (POST)
router.post("/", verifyAdmin, createTour);

// Update a tour (PUT)
router.put("/:id", verifyAdmin, updateTour);

// Delete a tour (DELETE)
router.delete("/:id", verifyAdmin, deleteTour);

// Get a single tour by ID (GET)
router.get("/:id", getSingleTour);

// Get all tours (GET)
router.get("/", getAllTour); 

// Get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router;
