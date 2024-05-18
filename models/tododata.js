const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    createdAt: new Date(),
  },
});
module.exports = mongoose.model("todo", todoSchema);
