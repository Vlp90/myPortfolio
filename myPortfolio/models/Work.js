const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: String,
  description: String,
  imagePreview: String,
  dateCreation: Date,
  tag: {
    type: Schema.Types.ObjectId,
    ref: "Tag",
  },
  video: String,
  imgOne: String,
  imgTwo: String,
  imgThree: String,
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
