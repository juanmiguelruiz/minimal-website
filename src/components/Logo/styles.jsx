import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 5rem 0;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  max-width: 80px;
`;

export const Content = styled.span`
  position: relative;
  display: flex;
  margin-right: ;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  font-size: 4.2rem;
  text-transform: uppercase;
  color: black;
  background: white;
  border-radius: 3px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    z-index: -1;
    width: calc(100% + 3px * 2);
    height: calc(100% + 3px * 2);
    background: linear-gradient(
      60deg,
      #236cd1,
      #2778cf,
      #2b84ce,
      #2f90cd,
      #339ccc,
      #37a8cb,
      #3bb4ca,
      #3fc1c9,
      #3fc1c9
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * 3px);
    -webkit-animation: moveGradient 4s alternate infinite;
    animation: moveGradient 4s alternate infinite;
  }

  @-webkit-keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;
