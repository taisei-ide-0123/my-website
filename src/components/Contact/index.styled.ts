import styled, { css } from "styled-components";
import { Column } from "../common/Box";

const commonFieldStyle = css`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: transparent;
  color: #d1d5db;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem 1.5rem;
  border-color: #1f2937;
  border-style: solid;
  border-width: 2px;
  border-radius: 0;
  :focus {
    outline: solid 2px #f59e0b;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Input = styled.input`
  ${commonFieldStyle}
`;

export const Textarea = styled.textarea`
  ${commonFieldStyle}
  height: 12rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #d1d5db;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 1rem 2.5rem;
  border-color: #1f2937;
  border-style: solid;
  border-width: 2px;
  border-radius: 9999px;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #f59e0b;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }
  :active {
    transform: translateY(-0.5rem);
    transition: transform 0.3s ease-in-out;
  }
`;

export const FormContainer = styled(Column)`
  padding: 2rem;
  @media screen and (min-width: 480px) {
    padding: 0 2rem;
  }
`;
