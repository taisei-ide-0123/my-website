import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 60px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
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

export const Text = styled.p`
  color: #727983;
  font-weight: 700;
  font-size: 1rem;
  font-family: sans-serif;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
