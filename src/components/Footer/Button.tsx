import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Text } from "../common/Text";
import { StyledButton, StyledLink } from "./index.styled";

const Button = () => {
  return (
    <StyledButton>
      <StyledLink href="https://github.com/taisei-ide-0123/portfolio">
        <FaGithub />
        <Text fw={700} fs="0.75rem" color="#f59e0b">
          View Source Code
        </Text>
      </StyledLink>
    </StyledButton>
  );
};

export default Button;
