import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import backgroundImage  from "../images/background.png"; 
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout backgroundImage={backgroundImage}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "200px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent sx={{ textAlign: "center", padding: "10px" }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2"  sx={{ fontSize: "0.9rem", color: "gray" }}>{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
