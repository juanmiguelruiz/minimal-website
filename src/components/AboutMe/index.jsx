import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <div className="col s12">
      <p className="home__hello">
        Hi! I'm Juanmi, front-end engineer. I love <strong>designing</strong>
        and <strong>creating</strong> websites.
      </p>
      <p className="home__hello">
        {`Follow me on `}
        <a href="https://github.com/juanmiguelruiz/" title="github">
          <FontAwesomeIcon className="about__icon" icon={faGithub} />
        </a>
        {` and `}
        <a href="https://www.linkedin.com/in/juanmiguelruiz/" title="linkedin">
          <FontAwesomeIcon className="about__icon" icon={faLinkedin} />
        </a>
        {` or if you prefer check my `}
        <a className="link" href="/CV">
          CV
        </a>
        .
      </p>
    </div>
  );
};

export default AboutMe;
