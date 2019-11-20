const express = require("express");
const router = express.Router();
const quotes = require("../../utils/quotes.json");
const fs = require("fs");

router.delete("/:author", (req, res) => {
  let quoteFound = {};
  quotes.map(data => {
    if (req.params.author === data.author) {
      quoteFound = Object.assign(data);
    }
  });
  console.log(quoteFound);

  if (
    Object.entries(quoteFound).length === 0 &&
    quoteFound.constructor === Object
  ) {
    const error = new Error("Quote not found!");
    error.status = 404;
    throw error;
    res.json(error);
  }

  const newQuotes = quotes
    .map(data => {
      if (req.params.author === data.author) {
        console.log(data.author);
        return null;
      } else {
        return data;
      }
    })
    .filter(quote => quote !== null);
  console.log(newQuotes);
  fs.writeFileSync("utils/quotes.json", JSON.stringify(newQuotes));
  res.status(200).end();
});

module.exports = router;
