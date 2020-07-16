const express = require("express");
const router = express.Router();

const protectRoute = require("../middlewares/protectRoute");
const Work = require("../models/Work");
const upload = require("../config/cloudinary");

router.get("/", protectRoute, (req, res, next) => {
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
router.get("/create", protectRoute, (req, res, next) => {
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

// router.post("/add", upload.single("images"), (req, res, next) => {
//   const { title, date, description, link } = req.body;
//   const imagePreview = req;
//   const imgOne = req.file.url;

//   console.log(imagePreview)

//   if (title === "" || date === "" || description === "" || link === "") {
//     return res.redirect("/dashboard/create");
//   }

//   const newWork = new Work({
//     title,
//     date,
//     description,
//     link,
//     imagePreview,
//     imgOne,
//   });

//   newWork
//     .save()
//     .then((dbRes) => {
//       console.log(dbRes);
//       res.redirect("/dashboard");
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// });

router.post("/add", upload.array("image"), (req, res, next) => {
  const { title, date, description, link } = req.body;
  const imagePreview = req.files[0].url;
  const imgOne =  req.files[1].url;
  const imgTwo =  req.files[2].url;
  const imgThree =  req.files[3].url;

  // const image = req.files[0].url;

  // console.log("image1", imagePreview);
  // console.log("image2", imgOne);
  // console.log("image3", imgTwo);
  // console.log("image4", imgThree);

  if (title === "" || date === "" || description === "" || link === "") {
    return res.redirect("/dashboard/create");
  }

  const newWork = new Work({
    title,
    date,
    description,
    link,
    // image,
    imagePreview,
    imgOne,
    imgTwo,
    imgThree,
  });

  newWork
    .save()
    .then((dbRes) => {
      console.log(dbRes);
      res.redirect("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
  // Work.create({ title, date, description, link })
  //   .then((dbRes) => {
  //     console.log(dbRes);
  //     res.redirect("/dashboard");
  //   })
  //   .catch(next);
});

module.exports = router;
