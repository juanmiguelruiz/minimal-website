import styled from "styled-components";
import { Footer as JMFooter } from "../../components";

export const Container = styled.div`
  padding: 0 8px;

  @media (min-width: 1024px) {
    padding: 0 160px;
  }
`;

export const Footer = styled(JMFooter)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
`;
