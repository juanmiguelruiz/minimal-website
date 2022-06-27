import styled from "styled-components";
import { SocialLink } from "../../../../components";

export const Header = styled.header`
  margin: 3rem 0;
`;

export const IconContainer = styled.div`
  text-align: center;
  padding: 1rem 2rem;
`;

export const Icon = styled(SocialLink)`
  margin: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`;
