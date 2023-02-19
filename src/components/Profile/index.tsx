import { Column } from "../common/Box";
import { Container } from "./index.styled";
import BackgroundImage from "./BackgroundImage";
import MyIcon from "./MyIcon";
import MyName from "./MyName";
import MySpecialization from "./MySpecialization";
import MediaIcons from "./MediaIcons";
import { socialMedia } from "data/socialMedia";

const Profile = () => {
  return (
    <Container fullW fullH>
      <BackgroundImage />
      <Column fullW fullH>
        <MyIcon />
        <MyName />
        <MySpecialization />
        <MediaIcons socialMedia={socialMedia} />
      </Column>
    </Container>
  );
};

export default Profile;
