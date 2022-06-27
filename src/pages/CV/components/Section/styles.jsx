import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;
