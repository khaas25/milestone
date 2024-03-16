var mongoose = require("mongoose");
var videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  views: { type: Number, required: false, default: 0 },
  likes: { type: Number, required: false, default: 0 },
  comments: [
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  timestamp: { type: Date, required: false, default: Date.now },
  thumbnail: { type: String, required: true },
  video: { type: String, required: true },
});
var videoSchema = new mongoose.model("VideoSchema", videoSchema);
module.exports = videoSchema;
