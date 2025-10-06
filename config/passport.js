const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.js");

const callbackURL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-domain.com/auth/google/callback"
    : "http://localhost:8080/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) return done(null, existingUser);

        // If user not found, create new one
        const newUser = await User.create({
          googleId: profile.id,
          email: profile.emails?.[0]?.value || "",
          username: profile.displayName, // passport-local-mongoose requires a username
        });
        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Local serialize/deserialize still works
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
