import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("Component Mounted!");
    axios.get("http://localhost:9191/api/videos")
      .then(response => {
        console.log("Fetched Videos:", response.data); // ✅ Print video list in terminal
        setVideos(response.data);
      })
      .catch(error => console.error("Error fetching videos", error));
  }, []);

  return (
    <div>
     
      {videos.map((video) => (
        <div key={video.id}>
          <video width="500" height="500" controls>
            <source src={`http://localhost:9191/api/videos/stream/${video.url.split('\\').pop()}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      
    </div>
  );
};

export default VideoPlayer;
