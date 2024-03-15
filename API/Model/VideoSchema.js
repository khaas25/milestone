var mongoose = require("mongoose");
var videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
var videoSchema = new mongoose.model("VideoSchema", authSchema);
module.exports = videoSchema;
