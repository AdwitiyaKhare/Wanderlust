require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = process.env.ATLASDB_URL;
const MongoStore = require("connect-mongo");

main()
  .then((res) => console.log("Connected to DB."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR IN MONGO SESSION STORE", err);
});

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "685eb1c1220da928d8bcb9f0",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
