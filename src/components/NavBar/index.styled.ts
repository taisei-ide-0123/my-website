import styled from "styled-components";

export const Wapper = styled.div`
  width: 100vw;
  height: 5.75rem;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #000a1f;
  width: 100vw;
  height: 5.75rem;
  padding: 0 2rem;
  z-index: 999;
`;

export const Character = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1.75rem;
  font-family: sans-serif;
  min-width: 5px;
  cursor: pointer;
  :hover {
    color: #4ac7ff;
    transform: translate(0, -10%);
    transition-duration: 0.3ms;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 100%;
`;

export const List = styled.li`
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
`;

interface TextProps {
  isClickedText: boolean;
}

export const Text = styled.p<TextProps>`
  color: ${(props) => (props.isClickedText ? "#fff" : "#727983")};
  font-weight: 700;
  font-size: 1rem;
  font-family: sans-serif;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
