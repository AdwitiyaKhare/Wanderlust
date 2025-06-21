const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => console.log("Connected to DB."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68502fa043b8684204ce83d7",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
