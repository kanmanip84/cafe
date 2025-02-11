import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./VideoSlideshow.css"; // Import CSS for styling

const VideoSlideshow = () => {
  const [videos, setVideos] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:9191/videos") // Fetch videos from backend
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust scrolling distance
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="video-banner-container">
      <button className="scroll-button left" onClick={scrollLeft}>&#9665;</button>

      <div className="video-scroll-container" ref={scrollRef}>
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <h3>{video.eventName}</h3>
            <video width="300" height="200" controls>
              <source src={`http://localhost:9191${video.videoUrl}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={scrollRight}>&#9655;</button>
    </div>
  );
};

export default VideoSlideshow;
