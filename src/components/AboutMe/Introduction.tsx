import React from "react";
import { CenterBox } from "../common/Box";
import Header from "./Header";
import { Description, StyledArticle } from "./index.styled";

interface IntroductionProps {
  header: string;
  introduction: string;
}

const Introduction = ({ header, introduction }: IntroductionProps) => {
  return (
    <CenterBox>
      <StyledArticle>
        <Header header={header} />
        <Description color="#d1d5db">{introduction}</Description>
      </StyledArticle>
    </CenterBox>
  );
};

export default Introduction;
