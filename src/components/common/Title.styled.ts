import styled from "styled-components";
import { Box } from "./Box";

interface StyledTitleProps {
  color?: string;
  fw?: number;
  fs?: string;
  ff?: string;
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  margin: 0;
  line-height: 1;
  letter-spacing: 0.025em;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: ${(props) => (props.fw ? props.fw : 500)};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  font-family: ${(props) => (props.ff ? props.ff : "sans-serif")};
`;

export const Container = styled(Box)`
  justify-content: left;
  align-items: center;
  gap: 2rem;
`;
