import styled from "styled-components";
import { SocialLink } from "../../components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
`;

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.5em;
`;

export const Icon = styled(SocialLink)`
  margin: 0 10px;
`;
export const Link = styled(RouterLink)`
  margin: 0 5px;
`;
