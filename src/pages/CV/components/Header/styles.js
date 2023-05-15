import styled from "styled-components";
import { SocialLink } from "../../../../components";

export const Header = styled.header`
  margin: 48px 0;
`;

export const IconContainer = styled.div`
  text-align: center;
  padding: 16px 32px;
`;

export const Icon = styled(SocialLink)`
  margin: 8px;

  svg {
    font-size: 24px;
  }
`;
