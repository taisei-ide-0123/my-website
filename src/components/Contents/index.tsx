import AboutMe from "../AboutMe";
import Contact from "../Contact";

interface ContentsProps {
  content: string;
  navbarList: string[];
}

const Contents = ({ content, navbarList }: ContentsProps) => {
  if (content === navbarList[0]) {
    return <AboutMe />;
  } else if (content === navbarList[1]) {
    return <Contact />;
  } else {
    return <AboutMe />;
  }
};

export default Contents;
