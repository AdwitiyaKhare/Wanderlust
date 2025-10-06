const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate emails
  },
  googleId: String, // for Google OAuth users
  // you can add more OAuth provider IDs here if needed later (facebookId, githubId)
});

// Integrates username/password authentication, hashing, and other passport-local-mongoose features
userSchema.plugin(passportLocalMongoose, {
  usernameField: "username", // default is 'username'; we can map this to displayName or email if desired
});

module.exports = mongoose.model("User", userSchema);
