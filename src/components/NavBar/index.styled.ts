import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
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
  width: 330px;
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
