const express = require("express");
const router = express.Router();
const quotes = require("../../utils/quotes.json");
const json = require("json");

router.get("/:id", (req, res, next) => {
  // const quotesData = JSON.parse(quotes)
  try {
    const quoteFound = [];
    quotes.map(data => {
      // console.log(data.author)
      if (req.params.id === data.author) {
        quoteFound.push(data);
      }
    });

    // const quoteFound = quotes.find(quote => quotes.author === "Ayn")
    if (quoteFound.length == 0) {
      const error = new Error("No quote found!");
      error.status = 404;
      throw error;
      res.json(error);
      quoteFound = [];
    }
    res.json(quoteFound);
    quoteFound = [];
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
