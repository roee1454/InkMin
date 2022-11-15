const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const adminRoute = require("./routes/admin");
const uploadRoute = require("./routes/uploadImg");

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://RH180:${process.env.PASSWORD}@cluster0.0qewrxt.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    return console.log("Connected To MongoDB!");
  })
  .catch((err) => {
    throw Error(err);
  });

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", adminRoute);
app.use("/upload", uploadRoute);

app.listen(process.env.PORT, () => {
  return console.log(`Server Is Running! http://localhost:${process.env.PORT}`);
});
