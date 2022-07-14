import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoPct from "../../assets/logo_m.png";
import LogoPctMini from "../../assets/logo_mista_small.png";
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
`;

const StyledImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.div`
  width: 10rem;
  height: 8.9rem;
  background-image: url(${LogoPct});
  background-color: ${(props) => props.theme.pageBackground};
`;

const StyledImgMini = styled.div`
  width: 5rem;
  height: 4.4rem;
  background-image: url(${LogoPctMini});
  background-color: ${(props) => props.theme.pageBackground};
`;

const StyledTittle = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => (props.small ? "1.2rem" : "1.6rem")};
  margin-top: 0.5rem;
  letter-spacing: 0.5rem;
`;

const StyledSubtittle = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => (props.small ? "0.8rem" : "1rem")};
`;

const Logo = (props) => (
  <StyledWrapper>
    <StyledImageWrapper to="/">
      {props.small ? <StyledImgMini /> : <StyledImg />}
    </StyledImageWrapper>
    <StyledTittle small={props.small}>MI.STA</StyledTittle>
    <StyledSubtittle small={props.small}>1990</StyledSubtittle>
  </StyledWrapper>
);

export default Logo;
