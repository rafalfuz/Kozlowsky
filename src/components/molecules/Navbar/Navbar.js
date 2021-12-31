import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledNavLinkWrapper = styled.ul`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 5px;
`;

const StyledMobileNavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: royalblue;
`;

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const handleMobileActive = (mobileActive) => {
    setMobileActive(!mobileActive);
    console.log(mobileActive);
  };

  const removeMobileActive = (mobileActive) => {
    setMobileActive(false);
  };
  return (
    <>
      <button onClick={() => handleMobileActive(mobileActive)}>Handler</button>
      <button onClick={() => removeMobileActive(mobileActive)}>Remover</button>
      <StyledNavbar>
        <StyledNavLinkWrapper>
          <StyledNavLink to="/link1">ITEM</StyledNavLink>
          <StyledNavLink to="/link1">ITEM</StyledNavLink>
          <StyledNavLink to="/link1">ITEM</StyledNavLink>
        </StyledNavLinkWrapper>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
