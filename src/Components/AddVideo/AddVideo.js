import React from "react";
import "./addVideo.css";
import { useRef } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default function AddVideo() {
  const videoTitleRef = useRef();
  const videoDescriptionRef = useRef();
  function addVideo() {
    var title = videoTitleRef.current.value;
    var description = videoDescriptionRef.current.value;
    var thumbnail = document.getElementById("image").value;
    var video = document.getElementById("videoinput").value;

    var payload = {
      title: title,
      description: description,
      thumbnail: thumbnail,
      video: video,
    };
    console.log(payload);
    axios
      .post("http://localhost:8080/videos", payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Product has been Uploaded");
        // videoTitleRef.current.value = "";
        // videoDescriptionRef.current.value = "";
        // document.getElementById("imagecontainer").innerHTML = "";
        // document.getElementById("videocontainer").innerHTML = "";
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Oops.. Something went wrong!");
      });
  }

  function readFile3(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader(); // Initialize base64 reader
        reader.onload = () => {
          // if (file.type.startsWith("video/")) {
          // If the file is a video
          var video = document.createElement("video");
          video.src = reader.result;
          video.controls = true; // Add controls to the video player
          document.getElementById("videocontainer").appendChild(video);
          document.getElementById("videoinput").value = reader.result; // Link of video in base64 format is stored in input as a string.
          // }

          console.log(reader.result);
        };
        reader.readAsDataURL(file); // Convert file to base64 data URL
      })(files[i]);
    }
  }

  function readFile2(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader(); // Initialize base64 reader
        reader.onload = () => {
          if (file.type.startsWith("image/")) {
            // If the file is an image
            var img = document.createElement("img");
            img.src = reader.result;
            document.getElementById("imagecontainer").appendChild(img);
            document.getElementById("image").value = reader.result; // Link of image in base64 format is stored in input as a string.
          }
          console.log(reader.result);
        };
        reader.readAsDataURL(file); // Convert file to base64 data URL
      })(files[i]);
    }
  }

  return (
    <div>
      <NotificationContainer />
      <div className="formcontainer">
        <form onSubmit={addVideo}>
          <h1>Add a Video</h1>
          <br />
          <br />
          {/* <p>{errors.title}</p> */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            ref={videoTitleRef}

            // value={values.title}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          <br />
          <br />
          {/* <p>{errors.description}</p> */}
          <textarea
            placeholder="Description"
            name="description"
            id="description"
            ref={videoDescriptionRef}
          />

          <br />
          <br />
          <input
            type="file"
            placeholder="Thumbnail"
            name="thumbnail"
            id="thumbnail"
            // value={values.thumbnail}
            // onChange={handleChange}
            // onBlur={handleBlur}
            onChange={readFile2}
          />
          <div id="imagecontainer"></div>
          <input type="text" id="image" />
          <br />
          <br />

          <input
            type="file"
            name="video"
            id="videofile"
            // accept="video/*"
            // value={values.video}
            // onChange={handleChange}
            // onBlur={handleBlur}
            onChange={readFile3}
          />
          <div id="videocontainer"></div>
          <input type="text" id="videoinput" />
          {/* <input
            type="file"
            placeholder="Video"
            name="video"
            id="video"
            // value={values.video}
            // onChange={handleChange}
            // onBlur={handleBlur}
          /> */}
          <br />
          <br />
          <input type="submit" className="submitbutton" />
        </form>
      </div>
    </div>
  );
}
