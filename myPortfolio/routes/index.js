const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/work/:id", (req, res, next) => {
  res.render("workDetails");
});

module.exports = router;
