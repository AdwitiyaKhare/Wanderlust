require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const session = require("express-session");
const MongoStore = require("connect-mongo");
const Stripe = require("stripe");

// Models
const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

// Routers
const apiRouter = require("./routes/api.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// Google Auth & Stripe Routers
const authRouter = require("./routes/auth.js"); // create this route (as in previous message)
const paymentRouter = require("./routes/payment.js"); // create this route (as in previous message)

const port = 8080;
const dbUrl = process.env.ATLASDB_URL;

// Connect to MongoDB
main()
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Mongo session store
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR IN MONGO SESSION STORE", err);
});

app.set("trust proxy", 1); // ✅ required for Render

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: process.env.NODE_ENV === "production", // true in production, false locally
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      httpOnly: true, // prevents JS access
    },
  })
);

app.use(flash());

// Passport
require("./config/passport"); // Google OAuth config
app.use(passport.initialize());
app.use(passport.session());

// Local Auth (existing)
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash & current user middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// CORS for frontend (needed if you call API from different domain)
const cors = require("cors");
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.use("/api", apiRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/auth", authRouter); // Google OAuth routes
app.use("/payment", paymentRouter); // Stripe payment routes

// 404 handler
app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// Error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  console.log(err);
});

// Start server
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
