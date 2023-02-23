import {
  Container,
  Character,
  UnorderedList,
  List,
  Text,
  Wapper,
} from "./index.styled";
import { Box, Space } from "../common/Box";
import { greetingArr } from "data/greeting";
import { navbarList } from "data/navbarList";

interface NavBarProps {
  handleClick: (contentName: string) => void;
  content: string;
}

const NavBar = ({ handleClick, content }: NavBarProps) => {
  return (
    <Wapper>
      <Container>
        <Box>
          {greetingArr.map((char: string) => (
            <Character key={char}>{char}</Character>
          ))}
        </Box>
        <Space />
        <Box>
          <UnorderedList>
            {navbarList.map((text) => (
              <List key={text} onClick={() => handleClick(text)}>
                <Text isClickedText={content === text}>{text}</Text>
              </List>
            ))}
          </UnorderedList>
        </Box>
      </Container>
    </Wapper>
  );
};

export default NavBar;
