import { Footer, Logo } from "../../components";
import GitHub from "../../assets/images/github.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import * as Styled from "./styles";

const Home = () => (
  <>
    <Styled.Container>
      <Logo />
      <Styled.Content>
        <p>
          Hi! I'm Juanmi, front-end engineer. I love <strong>designing </strong>
          and <strong>creating</strong> websites.
        </p>
        <p>
          Follow me on
          <Styled.Icon
            link="https://github.com/juanmiguelruiz/"
            icon={GitHub}
          />
          and
          <Styled.Icon
            link="https://www.linkedin.com/in/juanmiguelruiz/"
            icon={LinkedIn}
          />
          or if you prefer check my
          <Styled.Link to="/CV">CV</Styled.Link>
        </p>
      </Styled.Content>
    </Styled.Container>
    <Footer />
  </>
);

export default Home;
