import PropTypes from "prop-types";
import * as Styled from "./styles";

const Footer = ({ className }) => (
  <Styled.Footer className={className}>
    <Styled.Content>
      <p>
        Made with <span>♥️</span> by JM
      </p>
      <Styled.Links>
        <Styled.Link to="/">
          Home
        </Styled.Link>
        |
        <Styled.Link to="/cv" >
          CV
        </Styled.Link>
      </Styled.Links>
    </Styled.Content>
  </Styled.Footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};


export default Footer;
