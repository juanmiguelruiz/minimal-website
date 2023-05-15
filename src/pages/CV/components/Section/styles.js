import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 16px 0;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
