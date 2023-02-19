import { Column } from "../common/Box";
import Title from "../common/Title";
import Introduction from "./Introduction";
import PersonalInfo from "./PersonalInfo";
import { aboutMe } from "data/aboutMe";

const AboutMe = () => {
  return (
    <Column>
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
    </Column>
  );
};

export default AboutMe;