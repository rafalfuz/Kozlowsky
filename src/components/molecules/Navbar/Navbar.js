import { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";
import Logo from "../../atoms/logo";

const StyledNavbarWrapper = styled.nav`
  display: flex;
  height: 6rem;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  z-index: 1000;
  ${(props) =>
    props.mobileNavActive &&
    css`
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      height: 100vh;
    `}
`;

const StyledNavbar = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    left: ${({ mobile }) => (mobile ? 0 : "-100%")};
    background-color: ${(props) => props.theme.pageBackground};
    transition: all 0.5s ease;
    overflow: hidden;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  @media screen and (max-width: 960px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
  }
`;

const StyledRemoverMenu = styled.div`
  padding-top: 50px;
  width: 50px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const PowerIcon = styled(CgClose)`
  cursor: pointer;
`;

const StyledMobileMenuLogo = styled.div`
  position: absolute;
  top: 50px;
`;

const StyledLogo = styled.div`
  width: 50px;
  height: 44px;
  cursor: pointer;
`;

const MenuBtn = styled(CgMenu)`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const removeMobileMenu = () => {
    setMobileActive(false);
  };

  const handleMenu = () => setMobileActive(!mobileActive);
  return (
    <>
      <StyledNavbarWrapper mobileNavActive={mobileActive}>
        {mobileActive ? (
          <StyledNavbar mobile>
            <StyledMobileMenuLogo onClick={removeMobileMenu}>
              <StyledLogo>
                <Logo small />
              </StyledLogo>
            </StyledMobileMenuLogo>
            <StyledNavLink
              to="onas"
              activeclass="active"
              mobile={mobileActive.toString()}
              onClick={removeMobileMenu}
            >
              O NAS
            </StyledNavLink>
            <StyledNavLink
              to="/oferta"
              activeclass="active"
              mobile={mobileActive.toString()}
              onClick={removeMobileMenu}
            >
              OFERTA
            </StyledNavLink>
            <StyledNavLink
              to="/kontakt"
              activeclass="active"
              mobile={mobileActive.toString()}
              onClick={removeMobileMenu}
            >
              KONTAKT
            </StyledNavLink>
            <StyledRemoverMenu>
              <PowerIcon onClick={removeMobileMenu} />
            </StyledRemoverMenu>
          </StyledNavbar>
        ) : (
          <StyledNavbar>
            <MenuBtn onClick={() => handleMenu(mobileActive)} />
            <StyledNavLink to="/onas" activeclass="active">
              O nas
            </StyledNavLink>
            <StyledNavLink to="/oferta" activeclass="active">
              Oferta
            </StyledNavLink>
            <StyledNavLink to="/kontakt" activeclass="active">
              Kontakt
            </StyledNavLink>
          </StyledNavbar>
        )}
      </StyledNavbarWrapper>
    </>
  );
};

export default Navbar;
