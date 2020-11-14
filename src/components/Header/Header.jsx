import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import Avatar from "../Avatar";
import Information from "../Information";
import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <Logo />
      <Avatar />
      <Information/>
      <div className="center">
        <a href="https://github.com/juanmiguelruiz/" title="github"><FontAwesomeIcon className="header__info__icon" icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/juanmiguelruiz/" title="linkedin"><FontAwesomeIcon className="header__info__icon" icon={faLinkedin} /></a>
      </div>
    </header>
  );
};

export default Header;
