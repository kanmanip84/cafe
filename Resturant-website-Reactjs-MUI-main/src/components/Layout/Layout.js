import React from "react";
import Header from "./Header";



const Layout = ({ children, backgroundImage }) => {
  
  return (
    <div>
      <Header />
      {/* 🔹 Background applied ONLY to children container */}
      <div
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //minHeight: "100vh", // Ensures full height
          padding: "0.2px", // Adds spacing to prevent text from stretching
          color: "#5E0606",
        }}
      >

<main>{children}</main>

        
       
      </div>
     
    </div>
  );
};

export default Layout;
