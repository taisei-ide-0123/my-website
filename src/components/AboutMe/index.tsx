import { Column } from "../common/Box";
import Title from "../common/Title";
import Introduction from "./Introduction";
import PersonalInfo from "./PersonalInfo";
import { aboutMe } from "data/aboutMe";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <>
      <Title title={aboutMe.title} />
      <Introduction
        header={aboutMe.header}
        introduction={aboutMe.introduction}
      />
      <PersonalInfo
        nation={aboutMe.nation}
        hometown={aboutMe.hometown}
        residence={aboutMe.residence}
        birthday={aboutMe.birthday}
      />
      <Skills />
    </>
  );
};

export default AboutMe;
