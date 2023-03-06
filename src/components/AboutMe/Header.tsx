import { HeaderContainer, StyledHeader } from "./index.styled";

interface HeaderProps {
  header: string;
}

const Header = ({ header }: HeaderProps) => {
  return (
    <HeaderContainer>
      <StyledHeader>{header}</StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
