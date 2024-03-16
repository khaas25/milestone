var express = require("express");
var cors = require("cors");
var app = express();
var port = 8080;
// var bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());
require("./DB/Conn");
app.listen(port, () => {
  console.log("API is running on port: " + port);
});
// //==========================================================
var VideoSchema = require("./Model/VideoSchema");

////===========================================================

app.post("/videos", async (req, res) => {
  var newVideo = await VideoSchema(req.body);
  newVideo
    .save()
    .then(() => {
      res.status(200).send("Video Uploaded");
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/videos", async (req, res) => {
  var videos = await VideoSchema.find();
  res.status(400).send(videos);
});

app.get("/videos/:id", async (req, res) => {
  try {
    var _id = req.params.id;
    var video = await VideoSchema.findById(_id);
    res.status(200).send(video);
  } catch {
    res.status(404).send("Nothing Found");
  }
});

app.patch("/videos/:id", async (req, res) => {
  try {
    var _id = req.params.id;
    var updatedVideo = await VideoSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedVideo);
  } catch {
    res.status(404).send("Video not found");
  }
});

app.delete("/videos/:id", async (req, res) => {
  try {
    var _id = req.params.id;
    var deletedVideo = await VideoSchema.deleteOne({ _id: _id });
    res.status(200).send(deletedVideo);
  } catch {
    res.status(404).send("Video not found");
  }
});
