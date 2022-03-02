import React, { useState } from "react";
import Footer from "../component/Footer/Index";
import {
  homeObjone,
  // homeObjThree,
  // homeObjTwo,
} from "../component/InfoSection/Data";
import InfoSection from "../component/InfoSection/Index";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar/Index";
import HeroSection from "./../component/HeroSection/Index";
// import Projects from "./../component/Projects/Index";
// import Services from "./../component/Services/Index";
import Skills from "./../component/Skills/Index";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <InfoSection {...homeObjone} />
      <Skills />
      {/* <Services /> */}
      {/* <Projects /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;
