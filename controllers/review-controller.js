const Review = require("../models/Review");

const submitReview = async (req, res) => {
  try {
    const {  rating, comment } = req.body;
    const book = req.params.id
    const user = req.userInfo.userId; // this we will get from auth middleware

    //  Check if review already exists
    const existingReview = await Review.findOne({ book, user });
    if (existingReview) {
      return res.status(404).json({
        success: false,
        message: "You have already submitted a review for this book.",
      });
    }

    const review = new Review({ book, user, rating, comment });
    const savedReview = await review.save();

    if (savedReview) {
      res.status(201).json({
        success: true,
        message: "Review added successfully!",
        savedReview
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to add review.",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`,
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedReview = req.body;
    const user = req.userInfo.userId; // this will get from auth middleware

    // Fetch review by ID
    const review = await Review.findById(id).select("user");
    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    // Check permission only user who have added review can update
    if (review.user.toString() !== user) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to update this review.",
      });
    }

    const updateReview = await Review.findByIdAndUpdate(id, updatedReview, {
      new: true,
    });
    if (updateReview) {
      res.status(200).json({
        success: true,
        message: "Review  updated successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to update review.",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;

    const user = req.userInfo.userId; // this will get from auth middleware

    // Fetch review by ID
    const review = await Review.findById(id).select("user");
    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    // Check permission only user who have added review can delete
    if (review.user.toString() !== user) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to delete this review.",
      });
    }
    const deletedReview = await Review.findByIdAndDelete({ _id: id });

    if (deletedReview) {
      res.status(200).json({
        success: true,
        message: "Review Deleted Successfully !",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to delete review.",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`
    });
  }
};

module.exports = { submitReview, updateReview, deleteReview };
