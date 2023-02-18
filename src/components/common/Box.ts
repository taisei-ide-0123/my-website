import styled from "styled-components";

interface BoxProps {
  bgc?: string;
  h?: number;
  fullH?: boolean;
  w?: number;
  fullW?: boolean;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  center?: boolean;
  radius?: number;
}

export const Box = styled.div<BoxProps>`
  display: flex;
  ${(props) => (props.bgc ? `background-color: ${props.bgc};` : null)}
  ${(props) => (props.h ? `height: ${props.h}px;` : null)}
  ${(props) => (props.fullH ? "height: 100%;" : null)}
  ${(props) => (props.w ? `width: ${props.w}px;` : null)}
  ${(props) => (props.fullW ? "width: 100%;" : null)}
  ${(props) => (props.p ? `padding: ${props.p}px;` : null)}
  ${(props) => (props.pt ? `padding-top: ${props.pt}px;` : null)}
  ${(props) => (props.pb ? `padding-bottom: ${props.pb}px;` : null)}
  ${(props) => (props.pl ? `padding-left: ${props.pl}px;` : null)}
  ${(props) => (props.pr ? `padding-right: ${props.pr}px;` : null)}
  ${(props) =>
    props.px
      ? `padding-left: ${props.px}px; padding-right: ${props.px}px;`
      : null}
  ${(props) =>
    props.py
      ? `padding-top: ${props.py}px; padding-bottom: ${props.py}px;`
      : null}
  ${(props) => (props.center ? "align-items: center;" : null)}
  ${(props) => (props.radius ? `border-radius: ${props.radius}px;` : null)}
`;
