import styled from "styled-components";
import { Box } from "../common/Box";
import { Text } from "../common/Text";

export const StyledHeader = styled.h2`
  color: #9ca3af;
  font-size: 1.6rem;
`;

export const Description = styled(Text)`
  line-height: 1.65;
`;

export const StyledArticle = styled.article``;

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 0.5rem;
`;
