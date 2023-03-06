import styled from "styled-components";
import { CenterBox } from "./Box";

export const Main = styled(CenterBox)`
  /* NsvBar: 5.75rem, padding-top in main: 3rem  */
  height: calc(100vh - 5.75rem - 3rem);
  min-height: 600px;
  width: 100%;
  max-width: 1160px;
  padding: 3rem 5rem;
  margin: auto;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 5.75rem);
    padding: 0;
  }
`;
