import styled from "styled-components";

export const Job = styled.div`
  margin: 1rem 0 0;
  @media (min-width: 1024px) {
    width: 33%;
  }
`;

export const JobImage = styled.img`
  width: 110px;
  max-height: 95px;
  display: flex;
  margin: 0 auto;
  -o-object-fit: contain;
  object-fit: contain;
`;

export const JobInfo = styled.p`
  font-size: ${({ size }) => `${size}em`};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: center;
  line-height: 1em;
`;
