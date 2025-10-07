const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");

router.get("/listings", async (req, res) => {
  try {
    const { category, search } = req.query;
    const query = {};

    // ✅ Filter by category
    if (category && category !== "all") {
      query.category = category;
    }

    // ✅ Text search across multiple fields
    if (search && search.trim() !== "") {
      const regex = new RegExp(search.trim(), "i"); // case-insensitive
      query.$or = [
        { title: regex },
        { description: regex },
        { location: regex },
        { country: regex },
      ];
    }

    const listings = await Listing.find(query);
    res.json({ listings });
  } catch (err) {
    console.error("Error fetching listings:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router