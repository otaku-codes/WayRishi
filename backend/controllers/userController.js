import User from "../models/User.js";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

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

//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: Users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
// get User by search
export const getUserBySearch = async (req, res) => {


  const city = new RegExp(req.query.city || "", "i"); // Default to empty string if no city
  const distance = parseInt(req.query.distance) || 0; // Default to 0 if not provided
  const maxGroupSize = parseInt(req.query.maxGroupSize) || 0; // Default to 0 if not provided

  try {
    const Users = await User.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });


    res.status(200).json({
      success: true,
      count: Users.length,
      message: "Successfully retrieved Users",
      data: Users,
    });
  } catch (err) {
    console.error("Error occurred:", err.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving Users",
      error: err.message,
    });
  }
};

//get featured User
export const getFeaturedUser = async (req, res) => {
  try {
    const Users = await User.find({ featured: true }).limit(8);

    res.status(200).json({
      success: true,
      count: Users.length,
      message: "Successfully",
      data: Users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get User counts
export const getUserCount = async (req, res) => {
  try {
    const UserCount = await User.estimatedDocumentCount();
    res.status(200).json({ success: true, data: UserCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "faile to fetch" });
  }
};
