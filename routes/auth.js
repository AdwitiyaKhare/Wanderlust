const express = require("express");
const passport = require("passport");
const router = express.Router();

// Start login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/listings",
    successRedirect: "/listings",
    session: true,
  })
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

// Get current user
router.get("/me", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  res.json(req.user);
});

module.exports = router;
