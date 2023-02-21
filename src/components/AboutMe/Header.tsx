import React from "react";
import { Box } from "../common/Box";
import { StyledHeader } from "./index.styled";

interface HeaderProps {
  header: string;
}

const Header = ({ header }: HeaderProps) => {
  return (
    <Box px="1.5rem" py="0.50rem">
      <StyledHeader>{header}</StyledHeader>
    </Box>
  );
};

export default Header;
