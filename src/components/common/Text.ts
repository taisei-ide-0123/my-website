import styled from "styled-components";

interface TextProps {
  color?: string;
  fw?: number;
  fs?: string;
  ff?: string;
}

export const Text = styled.p<TextProps>`
  margin: 0;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: ${(props) => (props.fw ? props.fw : 500)};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  font-family: ${(props) => (props.ff ? props.ff : "sans-serif")};
`;
