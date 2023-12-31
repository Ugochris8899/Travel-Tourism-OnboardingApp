require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.DB;

mongoose
  .connect(url)
  .then(() => {
    console.log(`successfully connected `);
  })
  .catch((e) => {
    console.log(e.message);
  });
