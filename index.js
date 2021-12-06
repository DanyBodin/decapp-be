const express = require("express");
const formidablemiddleware = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(formidablemiddleware());
app.use(cors());

require("dotenv").config();

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/home", (req, res) => {
  res.json({ message: "WELCOME TO DECAPP" });
});

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("*", (req, res) => {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server up and running!`);
});
