import React from "react";
import * as Styled from "./styles";

const Footer = ({ className }) => (
  <Styled.Footer className={className}>
    <Styled.Content className="center">
      <p className="footer__made">
        Made with <span>♥️</span> by JM
      </p>
      <Styled.Links>
        <Styled.Link className="footer__link" to="/">
          Home
        </Styled.Link>
        |
        <Styled.Link to="/cv" className="footer__link">
          CV
        </Styled.Link>
      </Styled.Links>
    </Styled.Content>
  </Styled.Footer>
);

export default Footer;
