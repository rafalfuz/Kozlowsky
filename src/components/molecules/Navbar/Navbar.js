import { useState } from "react";
import styled, {css} from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from '../../atoms/logo'

const StyledNavbarWrapper = styled.nav`
  height: 60px;
  display: flex;  
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
    ${props => props.mobileNavActive && css`
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
`}
`

const StyledNavbar = styled.ul`
    list-style-type: none;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 20px;
        @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        left: ${(props)=>props.mobileNavActive ? 0 : '-100%'};
        background-color:  #282c36;
        transition: all .5s ease;
        overflow: hidden;
        color: red;
        }
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    z-index: 9999;
    color: ${(props) => props.theme.textColor};
    &.active{
        color: white;
    }
`

const StyledLogo = styled.div`
    display: ${(props)=>props.mobileNavActive ? 'block' : 'none'}
`

const StyledRemoveMenu = styled.p`
    font-size: 80px
    color: white;
    font-weight: 800;
`

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <>
          <StyledNavbarWrapper mobileNavActive={mobileActive}>
            <StyledNavbar>
              <StyledLogo mobileNavActive={mobileActive}><Logo/></StyledLogo>
          <StyledNavLink to="/">ITEM</StyledNavLink>
          <StyledNavLink to="/">ITEM</StyledNavLink>
          <StyledNavLink to="/">ITEM</StyledNavLink>
            {mobileActive && <StyledRemoveMenu>X</StyledRemoveMenu>}
            </StyledNavbar>
          </StyledNavbarWrapper>
    </>
  );
};

export default Navbar;
