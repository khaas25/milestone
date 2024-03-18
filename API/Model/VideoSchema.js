var mongoose = require("mongoose");
var videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  views: { type: Number, required: false, default: 0 },
  likes: { type: Number, required: false, default: 0 },
  comments: [
    {
      name: { type: String, required: false },
      comment: { type: String, required: false },
    },
  ],
  timestamp: { type: Date, required: false, default: Date.now },
  thumbnail: { type: String, required: false },
  video: { type: String, required: false },
});
var videoSchema = new mongoose.model("VideoSchema", videoSchema);
module.exports = videoSchema;
