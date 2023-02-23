import Link from "next/link";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: transparent;
`;

export const StyledButton = styled.button`
  width: 15.5rem;
  color: #f59e0b;
  background-color: transparent;
  border-radius: 0.75rem;
  border-color: #f59e0b;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  color: #d1d5db;
  font-weight: 600;
  font-size: 0.75rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
`;
