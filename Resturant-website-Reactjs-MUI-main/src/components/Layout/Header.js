import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Function to scroll to the selected section inside Home.js
  


  const handleScroll = (sectionId) => {
    const headerOffset = 70; // Adjust based on your header height
    const section = document.getElementById(sectionId);
  
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: "smooth",
      });
    }
  
    setMobileOpen(false); // Close mobile drawer after clicking
  };
  
  

  // Handle mobile drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        Kadak Cafe
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li><button onClick={() => handleScroll("home")}>Home</button></li>
        <li><button onClick={() => handleScroll("menu")}>Menu</button></li>
        <li><button onClick={() => handleScroll("about")}>About</button></li>
        <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "rgb(94,6,5)" }}>
          <Toolbar>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Kadak Cafe
            </Typography>

            {/* Desktop Navigation Menu */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li><button onClick={() => handleScroll("home")}>Home</button></li>
                <li><button onClick={() => handleScroll("menu")}>Menu</button></li>
                <li><button onClick={() => handleScroll("about")}>About</button></li>
                <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
