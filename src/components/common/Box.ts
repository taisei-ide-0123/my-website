import styled from "styled-components";

interface BoxProps {
  bgc?: string;
  h?: string;
  fullH?: boolean;
  w?: string;
  fullW?: boolean;
  p?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  px?: string;
  py?: string;
  center?: boolean;
  radius?: number;
  gap?: string;
}

export const Box = styled.div<BoxProps>`
  display: flex;
  ${(props) => (props.bgc ? `background-color: ${props.bgc};` : null)}
  ${(props) => (props.h ? `height: ${props.h};` : null)}
  ${(props) => (props.fullH ? "height: 100%;" : null)}
  ${(props) => (props.w ? `width: ${props.w};` : null)}
  ${(props) => (props.fullW ? "width: 100%;" : null)}
  ${(props) => (props.p ? `padding: ${props.p};` : null)}
  ${(props) => (props.pt ? `padding-top: ${props.pt};` : null)}
  ${(props) => (props.pb ? `padding-bottom: ${props.pb};` : null)}
  ${(props) => (props.pl ? `padding-left: ${props.pl};` : null)}
  ${(props) => (props.pr ? `padding-right: ${props.pr};` : null)}
  ${(props) =>
    props.px ? `padding-left: ${props.px}; padding-right: ${props.px};` : null}
  ${(props) =>
    props.py ? `padding-top: ${props.py}; padding-bottom: ${props.py};` : null}
  ${(props) => (props.center ? "align-items: center;" : null)}
  ${(props) => (props.radius ? `border-radius: ${props.radius}px;` : null)}
  ${(props) => (props.gap ? `gap: ${props.gap};` : null)}
`;

export const CenterBox = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const Column = styled(Box)`
  flex-direction: column;
`;

export const CenterColumn = styled(Column)`
  justify-content: center;
`;

export const Space = styled(Box)`
  flex: 1;
`;

export const MainSection = styled(Box)`
  height: calc(100vh - 5.75rem - 6rem);
  background-color: #111827;
  border-radius: 0.5rem;
  box-shadow: -0.5rem -0.5rem rgba(245, 158, 11, 0.3);
  @media screen and (max-width: 768px) {
    height: calc(100vh - 5.75rem);
    box-shadow: none;
    border-radius: 0;
  }
`;

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
`;
