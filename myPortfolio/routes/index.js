const express = require("express");
const router = express.Router();

const Work = require("../models/Work");

/* GET home page. */
router.get("/", (req, res, next) => {
  Work.find({})
    .then((dbResult) => {
      res.render("index", { allWork: dbResult });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/work/:id", (req, res, next) => {
  res.render("workDetails");
});

module.exports = router;
