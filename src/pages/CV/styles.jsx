import styled from "styled-components";
import { Footer as JMFooter } from "../../components";

export const Container = styled.div`
  padding: 0 0.5rem;

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
`;

export const Footer = styled(JMFooter)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5%;
`;
