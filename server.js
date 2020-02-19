const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB Config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(JSON.stringify(err)));

app.get("/", (req, res) => res.send("Hello World 1234"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
