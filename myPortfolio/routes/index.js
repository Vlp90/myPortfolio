const express = require("express");
const router = express.Router();

const Work = require("../models/Work");

/* GET home page. */
router.get("/", (req, res, next) => {
  Work.find()
    .then((dbResult) => {
      res.render("index", { allWork: dbResult });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/work/:id", (req, res, next) => {
  Work.findById(req.params.id)
    .then((workId) => {
      // console.log(dbRes);
      res.render("workDetails", { workId });
    })
    .catch((err) => {
      console.log(err);
    });
});



//ADMIN PART

router.get('/login', (req,res, next) => {
  res.render('login')
})


router.get("/dashboard", (req, res, next) => {
  Work.find()
    .then((dbResult) => {
      // console.log(dbResult)
      res.render("dashboard/manage", { allWork: dbResult });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
