const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const getData = require("./routes/api/getData");
const postData = require("./routes/api/postData");

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

// Add routes
app.use("/api/getData", getData);
app.use("/api/postData", postData);

// add listening port
const port = process.env.PORT || 5006;
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

module.exports = app;
