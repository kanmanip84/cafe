
import Layout from "../components/Layout/Layout";
import Banner from "../images/banner.jpg";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import "../styles/HomeStyles.css";
import Footer from "../components/Layout/Footer";

const Home = () => {
  

  return (
    <>
      <Layout >
        
       
          <div className="home" style={{ 
    backgroundImage: `url(${Banner})`, 
    height: "100vh",  // Full screen height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "80px", // Adjust if header overlaps
  }}>
          <div className="headerContainer"></div>
        </div>

        {/* Dynamically Show Selected Section at the Top */}
        <div className="merged-sections">
  <div id="menu"><Menu /></div>
  <div id="about"><About /></div>
  <div id="contact"><Contact /></div>
</div>
      </Layout>

      {/* Footer ONLY at the end of the full home page */}
      <Footer />
    </>
  );
};

export default Home;
