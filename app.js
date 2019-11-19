const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

// iniaitize app
const app = express();

// body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// establish db connection
const db = keys.mongoURI;
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(res => {
    console.log("Database connected successully");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json("lalalal");
});

// add listening port
const port = process.env.PORT || 5006;
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

module.exports = app;
