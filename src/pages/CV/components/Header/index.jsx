import { Information } from "./components/";
import { Avatar, Logo } from "../../../../components";
import avatar from "../../../../assets/images/avatar.jpg";
import github from "../../../../assets/images/github.svg";
import linkedin from "../../../../assets/images/linkedin.svg";
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
      <Styled.Icon link="https://github.com/juanmiguelruiz/" icon={github} />
      <Styled.Icon
        link="https://www.linkedin.com/in/juanmiguelruiz/"
        icon={linkedin}
      />
    </Styled.IconContainer>
  </Styled.Header>
);

export default Header;
