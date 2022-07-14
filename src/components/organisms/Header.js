import styled from "styled-components";
import Toggler from "../atoms/Toggler";
import Logo from "../atoms/logo";
import Navbar from "../molecules/Navbar/Navbar";

const StyledHeader = styled.header`
  border: none;
`;

const Header = ({ theme, setTheme }) => {
  return (
    <StyledHeader>
      <Toggler theme={theme} setTheme={setTheme} />
      <Logo />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
