import styled from "styled-components";
import { Column } from "../common/Box";

export const ContentsContainer = styled(Column)`
  flex: 1;
  overflow: scroll;
  @media screen and (min-width: 1024px) {
    flex: 0.6;
  }
`;
