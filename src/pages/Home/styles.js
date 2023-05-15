import styled from "styled-components";
import { SocialLink } from "../../components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 160px;
  }
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 24px;
`;

export const Icon = styled(SocialLink)`
  margin: 0 12px;
`;

export const Link = styled(RouterLink)`
  margin: 0 4px;
`;
