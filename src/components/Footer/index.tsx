import { Box, CenterColumn } from "../common/Box";
import { Text } from "../common/Text";
import Button from "./Button";
import FooterText from "./FooterText";
import { StyledFooter } from "./index.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <CenterColumn gap="0.5rem">
        <Button />
        <FooterText />
      </CenterColumn>
    </StyledFooter>
  );
};

export default Footer;
