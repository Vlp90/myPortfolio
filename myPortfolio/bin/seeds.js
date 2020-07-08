require("dotenv").config();
const mongoose = require("mongoose");

const Work = require("../models/Work");
const Tag = require("../models/Tag");
const User = require("../models/User");

// USER SEEDS

// const myUser = {
//     email: "vladimir.leloup@gmail.com",
//     password: "1234",
//   };

// mongoose
//   .connect("mongodb://localhost/myPortfolio", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);

//     // Seeds
//     User.create(myUser)
//       .then((dbResponse) => {
//         console.log(dbResponse);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(`Error occured while connecting to the Database ${err}`);
//   });

// WORK SEEDS

const myWork = [
  //   {
  //     title: "Sportify",
  //     description: "First App to be printed to my awesome Portfolio",
  //     imagePreview:
  //       "https://en.webself.net/img/accueil-anim/appareil-architecte_en.png",
  //     dateCreation: "2020-06-02",
  //     tag: ["Full stack",
  //     "Front-end",
  //     "Back-end"],
  //     video: "https://www.youtube.com/watch?v=VkDaa_7npz8&feature=youtu.be",
  //     imgOne:
  //       "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  //     imgTwo:
  //       "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  //     imgThree:
  //       "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F17%2Fca5d989e-beb8-4fd0-887e-4d74a280d273%2Fwebsite-hero2.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  //   },
  {
    title: "Edufy",
    description: "Second App to be printed to my awesome Portfolio",
    imagePreview:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    dateCreation: "2020-05-02",
    tag: ["Full stack", "Front-end", "Back-end"],
    video: "https://www.youtube.com/watch?v=VkDaa_7npz8&feature=youtu.be",
    imgOne:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgTwo:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgThree:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F17%2Fca5d989e-beb8-4fd0-887e-4d74a280d273%2Fwebsite-hero2.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  },
  {
    title: "Stringify",
    description: "Third App to be printed to my awesome Portfolio",
    imagePreview:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    dateCreation: "2020-04-02",
    tag: ["Vanilla.js", "React.js", "Express.js", "Html"],
    video: "https://www.youtube.com/watch?v=VkDaa_7npz8&feature=youtu.be",
    imgOne:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgTwo:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgThree:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F17%2Fca5d989e-beb8-4fd0-887e-4d74a280d273%2Fwebsite-hero2.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  },
  {
    title: "Pouetify",
    description: "Fourth App to be printed to my awesome Portfolio",
    imagePreview:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    dateCreation: "2020-03-02",
    tag: ["CSS", "Material UI", "Bootstrap", "MongoDB"],
    video: "https://www.youtube.com/watch?v=VkDaa_7npz8&feature=youtu.be",
    imgOne:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgTwo:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F11%2Fdd7e48e3-a2d3-471d-9038-713f265278d1%2Fwebsite-hero1.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
    imgThree:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F17%2Fca5d989e-beb8-4fd0-887e-4d74a280d273%2Fwebsite-hero2.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457",
  },
];

mongoose
  .connect("mongodb://localhost/myPortfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);

    // Seeds
    Work.create(myWork)
      .then((dbResponse) => {
        console.log(dbResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });

// TAG SEEDS

// const myTag = [
//   "Full stack",
//   "Front-end",
//   "Back-end",
//   "Game",
//   "UI, UX",
//   "Node.js",
//   "Canvas",
//   "Vanilla.js",
//   "React.js",
//   "Express.js",
//   "Html",
//   "CSS",
//   "Material UI",
//   "Bootstrap",
//   "MongoDB",
// ];

// const tagObjects = myTag.map((string) => {
//   let obj = {};
//   obj.myTag = string;
//   return obj;
// });
// console.log(tagObjects);

// mongoose
//   .connect("mongodb://localhost/myPortfolio", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);

//     // Seeds
//     User.create(myUser)
//       .then((dbResponse) => {
//         console.log(dbResponse);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(`Error occured while connecting to the Database ${err}`);
//   });
