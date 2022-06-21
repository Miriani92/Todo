const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name "],
    trim: true,
    maxLength: [20, "the name can not be more than 20 characters long"],
  },
  completed: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
