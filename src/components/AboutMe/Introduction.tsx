import React from "react";
import { CenterBox } from "../common/Box";
import Description from "./Description";
import Header from "./Header";
import { StyledArticle } from "./index.styled";

interface IntroductionProps {
  header: string;
  introduction: string;
}

const Introduction = ({ header, introduction }: IntroductionProps) => {
  return (
    <CenterBox>
      <StyledArticle>
        <Header header={header} />
        <Description introduction={introduction} />
      </StyledArticle>
    </CenterBox>
  );
};

export default Introduction;
