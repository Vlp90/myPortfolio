const express = require("express");
const router = express.Router();

const Work = require("../models/Work");

router.get("/", (req, res, next) => {
  Work.find()
    .then((dbResult) => {
      console.log(dbResult);
      res.render("dashboard/manage", { allWork: dbResult });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res, next) => {
  res.render("dashboard/addWork");
});

module.exports = router;
