const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Add review
router.post("/", validateReview, wrapAsync(reviewController.createReview));

// Delete review
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports = router;
