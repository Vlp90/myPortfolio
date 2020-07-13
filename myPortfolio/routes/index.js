const express = require("express");
const router = express.Router();



const Work = require("../models/Work");
const User = require("../models/User");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

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

//SIGN IN

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
    res.render("signup", {
      errorMessage: "Indicate a username and a password to sign up",
    });
    return;
  }
  // check if user already exist in the DB
  User.findOne({
    username: username,
  })
    .then((user) => {
      if (user !== null) {
        console.log(user);
        res.render("signup", {
          errorMessage: "The username already exists!",
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        username : username,
        password: hashPass,
      })
        .then((result) => {
          console.log(result);
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

// LOG IN

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("login", {
      errorMessage: "Please enter both, username and password to sign up.",
    });
    return;
  }

  User.findOne({
    username: theUsername,
  })
    .then((user) => {
      if (!user) {
        console.log(user);
        res.render("login", {
          errorMessage: "The username doesn't exist.",
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/dashboard");
      } else {
        res.render("login", {
          errorMessage: "Incorrect password",
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
