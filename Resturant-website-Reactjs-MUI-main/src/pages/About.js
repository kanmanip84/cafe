import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import VideoSlideshow from "../components/VideoSlideshow";
import backgroundImage  from "../images/background.png"; 
import { Link } from "react-router-dom";


import '../components/VideoSlideshow.css';

import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Layout backgroundImage={backgroundImage}>
      
     
      <Box
        sx={{
          my: 15,
          mt: 5,
          textAlign: "center",
          p: 2,
         
          "& h4": {
         
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",

          },
          "& p": {
            textAlign: "justify",
            fontWeight: "bold",
            fontColor:"#5E0605",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "2rem",
            },
          },
        }}
      >
       
        <Typography variant="h4" >Welcome To My Resturant</Typography>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore?
        </p>
   
      <div className="videocontainer1" ><VideoSlideshow /></div>

      {/* Admin Link Below Video Gallery */}
      <div style={{ marginTop: "80px" }}>
         
          <Link
            to="/admin"
            style={{
              display: "inline-block",
              fontWeight: "bold",
              color: "#5E0606",
              textDecoration: "none",
              border: "2px solid #5E0606",
              padding: "8px 12px",
              borderRadius: "5px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#5E0606";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#5E0606";
            }}
          >
            Admin Panel
          </Link>
        </div>

     
      </Box>
     
    </Layout>
  );
};

export default About;

