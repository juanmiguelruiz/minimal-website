import React from "react";
import { Link } from "react-router-dom";
import Education from "../../components/Education";
import Experience from "../../components/Experience/Experience";
import Header from "../../components/Header";

const CvPage = () => {
  return (
    <>
    <div className="container">
      <Header />
      <hr/>
      <Experience/>
      <hr/>
      <Education/>
    </div>

    <footer className="footer__cv">
        <div className="center">
          <p className="footer__made">
            Made with <span>♥️</span> by JM
          </p>
          <p className="footer__links">
            <Link className="footer__link" to="/">
              Home
            </Link>{" "}
            | {""}
            <Link to="/cv" className="footer__link" >
              CV
            </Link>
          </p>
        </div>
    </footer>

    </>
  );
};

export default CvPage;
