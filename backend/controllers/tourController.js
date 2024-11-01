import { parse } from "dotenv";
import Tour from "../models/Tour.js";

// create new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(201).json({
      // Using 201 for resource creation
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    // Attempt to find and update the tour
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true } 
    );

    // Check if the tour exists
    if (!updatedTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // Return success response with updated tour data
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging

    // Return a failure response with a generic message
    res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message, // Optional: include error details if needed
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
// get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city || "", "i"); // Default to empty string if no city
  const distance = parseInt(req.query.distance) || 0; // Default to 0 if not provided
  const maxGroupSize = parseInt(req.query.maxGroupSize) || 0; // Default to 0 if not provided

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved tours",
      data: tours,
    });
  } catch (err) {
    console.error("Error occurred:", err.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving tours",
      error: err.message,
    });
  }
};

//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "faile to fetch" });
  }
};
