import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Footer = styled.footer`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(ReactLink)`
  margin: 0 0.2rem;
  text-decoration: none;
`;
