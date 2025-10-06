const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  if (!req.user) {
    req.flash("error", "Login to add reviews");
    return res.redirect(`/login`);
  }
  const listing = await Listing.findById(req.params.id);
  const newReview = new Review(req.body.review);
  newReview.owner = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  req.flash("success", "New Review Created");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  if (!req.user) {
    req.flash("error", "Login to delete reviews");
    return res.redirect(`/login`);
  }
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.owner.equals(req.user._id)) {
    req.flash("error", "You are not permitted to delete this review!");
    return res.redirect(`/listings/${id}`);
  }
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};
