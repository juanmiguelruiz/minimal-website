import React from "react";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";

const HomePage = () => {
  return (
    <div>
      <div className="container hello">
        <Logo />
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
