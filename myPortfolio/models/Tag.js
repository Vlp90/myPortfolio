const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: {
    type: String,
    enum: [
      "Full stack",
      "Front-end",
      "Back-end",
      "Game",
      "UI, UX",
      "Node.js",
      "Canvas",
      "Vanilla.js",
      "React.js",
      "Express.js",
      "Html",
      "CSS",
      "Material UI",
      "Bootstrap",
      "JQuery",
      "MongoDB",
    ],
  },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
