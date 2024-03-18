import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import axios from "axios";
import thumbsup from "../../Images/thumbsup.jpg";
import views from "../../Images/viewsimage.jpg";

import "./singlevideo.css";

export default function SingleVideo() {
  var [singleVideo, setSingleVideo] = useState({});
  var [showCommentBox, setShowCommentBox] = useState(false);
  var location = useLocation();
  var id = location.state.id;
  useEffect(() => {
    async function getData() {
      var response = await fetch(`http://localhost:8080/videos/` + id);
      var data = await response.json();
      console.log(data);
      setSingleVideo(data);
    }
    getData();
  }, [id]);

  function openCommentBox() {
    setShowCommentBox(true);
  }

  function closeCommentBox() {
    function addCommentData() {
      var commentdata = document.getElementById("commentdata").value;
      var commentname = document.getElementById("commentname").value;
      var newComment = {
        name: commentname,
        comment: commentdata,
      };
      var payload = {
        comments: [...singleVideo.comments, newComment],
      };
      console.log(payload);
      axios
        .patch(`http://localhost:8080/videos/${id}/comments`, payload)
        .then((res) => {
          console.log(res);
          NotificationManager.success("Product has been Uploaded");
        })
        .catch((e) => {
          console.log(e);
          NotificationManager.error("Oops.. Something went wrong!");
        });
    }
    addCommentData();
    setShowCommentBox(false);
  }
  return (
    <div>
      <NotificationContainer />
      <div className="formatvideo">
        {" "}
        <>
          <h1>{singleVideo.title}</h1>
          <img src={singleVideo.thumbnail} alt="thumbnail" id="thumbnail" />
          <h2>{singleVideo.description}</h2>
          <div className="likesviews">
            <p>
              Likes: {singleVideo.likes}{" "}
              <img src={thumbsup} alt="" id="thumbsup" />{" "}
            </p>
            <p>
              Views: {singleVideo.views}
              <img src={views} alt="" id="views" />{" "}
            </p>
          </div>
          <div>
            <button className="addcomment" onClick={openCommentBox}>
              Add a comment
            </button>
          </div>
          <br />

          {showCommentBox && (
            <div className="commentBox">
              <div className="usercommentcontainer">
                <textarea
                  placeholder="Write your comment here"
                  id="commentdata"
                  className="usercommentdata"
                ></textarea>
                <br />
                <input
                  type="text"
                  placeholder="Name:"
                  id="commentname"
                  className="usercommentdata"
                />
                <br />
                <br />
                <button onClick={closeCommentBox} id="submitcomment">
                  Submit
                </button>
              </div>
            </div>
          )}
          <div className="comments">
            {singleVideo.comments && singleVideo.comments.length > 0 ? (
              singleVideo.comments.slice(0, 5).map((comment) => (
                <>
                  {" "}
                  <p>{comment.comment}</p>
                  <p> {comment.name}</p>
                </>
              ))
            ) : (
              <p>No comments available</p>
            )}
          </div>
        </>
      </div>
    </div>
  );
}
