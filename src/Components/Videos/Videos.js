import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Videos() {
  var navigate = useNavigate();
  var [videos, setVideos] = useState([]);
  useEffect(() => {
    async function getData() {
      var response = await fetch(`http://localhost:8080/videos`);
      var data = await response.json();
      console.log(data);
      setVideos(data);
    }
    getData();
  }, []);

  function goToSingleVideo(id) {
    navigate("/singlevideo", { state: { id: id } });
  }
  return (
    <div>
      {videos.map((video) => (
        <>
          <h1>{video.title}</h1>
          <img src={video.thumbnail} alt="thumbnail" />
          <h2>{video.description.slice(0, 200)}</h2>
          <div className="likesviews">
            {" "}
            <p>{video.likes}</p>
            <p>{video.views}</p>
          </div>
          <button onClick={() => goToSingleVideo(video._id)}>
            More details..
          </button>
        </>
      ))}
    </div>
  );
}
