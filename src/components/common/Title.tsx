import React from "react";
import { Container, StyledTitle } from "./Title.styled";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Container>
      <StyledTitle color="#d1d5db" fs="1.875rem">
        {title}
      </StyledTitle>
    </Container>
  );
};

export default Title;
