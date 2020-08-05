const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: String,
  image: [String],
  description: String,
  // imagePreview: String,
  imagePreview: String,
  dateCreation: Date,
  //   tag: {
  //     type: String,
  //     enum: [
  //       "Full stack",
  //       "Front-end",
  //       "Back-end",
  //       "Game",
  //       "UI, UX",
  //       "Node.js",
  //       "Canvas",
  //       "Vanilla.js",
  //       "React.js",
  //       "Express.js",
  //       "Html",
  //       "CSS",
  //       "Material UI",
  //       "Bootstrap",
  //       "MongoDB",
  //     ],
  //   },
  tag: [String],
  link: String,
  video: String,
  // video: {
  //   type: String,
  //   default: "noVideo",
  // },
  imgOne: String,
  imgTwo: String,
  imgThree: String,
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
