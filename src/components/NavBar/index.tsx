import {
  Container,
  Character,
  UnorderedList,
  List,
  Text,
} from "./index.styled";
import { Box } from "../common/Box";
import { greetingArr } from "data/greeting";
import { navbarList } from "data/navbarList";

const NavBar = () => {
  return (
    <Container>
      <Box>
        {greetingArr.map((char: string) => (
          <Character key={char}>{char}</Character>
        ))}
      </Box>
      <UnorderedList>
        {navbarList.map((text) => (
          <List key={text}>
            <Text>{text}</Text>
          </List>
        ))}
      </UnorderedList>
    </Container>
  );
};

export default NavBar;
