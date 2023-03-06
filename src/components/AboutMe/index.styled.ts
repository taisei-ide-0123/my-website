import styled from "styled-components";
import { Box } from "../common/Box";

export const HeaderContainer = styled(Box)`
  padding: 0.5rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem 0 2rem;
  }
`;

export const StyledHeader = styled.h2`
  color: #9ca3af;
  font-size: 1.6rem;
`;

export const DescriptionContainer = styled(Box)`
  padding: 0.75rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const StyledArticle = styled.article``;

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 0.5rem;
  padding: 1.75rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0.5rem 2rem 1rem 2rem;
  }
`;

export const GridIcons = styled(Box)`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 0.5rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 3rem;
    height: 30%;
  }
`;
