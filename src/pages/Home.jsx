import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import FeaturedProjects from "../components/featuredProjects/FeaturedProjects";
import About from "../components/about/About";

import Footer from "../components/footer/Footer";
import Amenities from "../components/about/amenities/Amenities";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProjects />
    
      < Amenities/>
     
      <Footer />
    </>
  );
};

export default Home;