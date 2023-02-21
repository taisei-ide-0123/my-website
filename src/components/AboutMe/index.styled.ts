import styled from "styled-components";
import { Box } from "../common/Box";

export const StyledHeader = styled.h2`
  color: #9ca3af;
  font-size: 1.6rem;
`;

export const StyledArticle = styled.article``;

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 0.5rem;
`;

export const GridIcons = styled(Box)`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 0.5rem;
  height: 100%;
`;
