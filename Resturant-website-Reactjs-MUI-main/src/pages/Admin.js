import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { Button, Form, Container } from "react-bootstrap";
import backgroundImage from "../images/background.png";

const UploadVideo = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowX = "hidden"; // Prevents horizontal scrolling
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!isAdmin) {
      alert("Access denied! Incorrect password.");
      return;
    }

    if (!file) {
      alert("Please select a video file");
      return;
    }

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("description", description);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:9191/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Video uploaded successfully!");
      navigate("/"); // Redirect to Home
    } catch (error) {
      console.error("Error uploading video", error);
    }
  };

  const checkPassword = () => {
    if (password === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <Layout>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#5E0605" }}>Upload Video</h2>

        {!isAdmin ? (
          <div className="p-4 bg-white rounded shadow text-center" style={{ maxWidth: "400px", width: "100%" }}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3 text-center"
            />
            <Button onClick={checkPassword} className="w-100" style={{ backgroundColor: "#5E0605", color: "white" }}>
              Submit
            </Button>
          </div>
        ) : (
          <Form className="p-4 bg-white rounded shadow" style={{ maxWidth: "600px", width: "100%" }}>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" onChange={(e) => setEventName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="file" className="mt-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Button onClick={handleUpload} className="w-100 mt-3" style={{ backgroundColor: "#5E0605", color: "white" }}>
              Upload Video
            </Button>
          </Form>
        )}
      </Container>
    </Layout>
  );
};

export default UploadVideo;
