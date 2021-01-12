require("dotenv").config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

exports.Users = require("./user");
exports.Notes = require("./notes");
