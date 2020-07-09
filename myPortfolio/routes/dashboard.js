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

// FORM
router.get("/create", (req, res, next) => {
  res.render("dashboard/addWork");
});

// CREATE NEW
// router.post("/dashboard/addWork", (req, res, nex) => {
//   const { title, date, description, link } = req.body;

//   if (title === "" || date === "" || description === "" || link === "") {
//     return res.redirect("/dashboard/addWork");
//   }

//   Work.create({ title, date, description, link })
//     .then((dbRes) => {
//       res.redirect("/dashboard");
//       console.log(dbRes);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/add", (req, res, next) => {
  const { title, date, description, link } = req.body;

  if (title === "" || date === "" || description === "" || link === "") {
    return res.redirect("/dashboard/create");
  }
  Work.create({ title, date, description, link })
    .then((dbRes) => {
      console.log(dbRes);
      res.redirect("/dashboard");
    })
    .catch(next);
});

module.exports = router;
