import AboutMe from "../AboutMe";
import Contact from "../Contact";
import { ContentsContainer } from "./index.styled";

interface ContentsProps {
  content: string;
  navbarList: string[];
}

const Contents = ({ content, navbarList }: ContentsProps) => {
  return (
    <ContentsContainer>
      {content === navbarList[0] ? <AboutMe /> : <Contact />}
    </ContentsContainer>
  );
};

export default Contents;
