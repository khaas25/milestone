var mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://khaas25:1234@wlms.zjs0lk4.mongodb.net/videos")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((e) => {
    console.log(e);
  });
