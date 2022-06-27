import React from "react";
import { Information } from "./components/";
import { Avatar, Logo } from "../../../../components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import avatar from "../../../../assets/images/avatar.jpg";
import * as Styled from "./styles";

const Header = () => (
  <Styled.Header>
    <Logo />
    <Avatar img={avatar} />
    <Information
      name="Juan Miguel Ruiz Pazos"
      position="Front-end Engineer"
      email="juanmiguelruizpazoswork@gmail.com"
    />
    <Styled.IconContainer>
      <Styled.Icon link="https://github.com/juanmiguelruiz/" icon={faGithub} />
      <Styled.Icon
        link="https://www.linkedin.com/in/juanmiguelruiz/"
        icon={faLinkedin}
      />
    </Styled.IconContainer>
  </Styled.Header>
);

export default Header;
