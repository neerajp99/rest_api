const express = require("express");
const router = express.Router();
const quotes = require("../../utils/quotes.json");
const fs = require('fs');

router.post("/", (req, res, next) => {
  try {
    const newQuote = {
      quote: req.body.quote,
      author: req.body.author,
      category: req.body.category
    };
    quotes.push(newQuote);
    fs.writeFileSync("utils/quotes.json", JSON.stringify(quotes));
    res.status(201).json(quotes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
