import React from "react";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";

const HomePage = () => {
  return (
    <>
      <div className="container center hello">
        <Logo />
        <AboutMe />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
