const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");

router.get("/listings", async (req, res) => {
  const { category } = req.query;
  const listings = category
    ? await Listing.find({ category })
    : await Listing.find({});
  res.json({ listings });
});

module.exports = router