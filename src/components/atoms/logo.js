import styled from "styled-components";
import LogoPct from "../../assets/logo_m.png";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.div`
  width: 100px;
  height: 89px;
  background-image: url(${LogoPct});
  background-color: ${(props) => props.theme.pageBackground};
`;

const StyledTittle = styled.p`
  color: ${(props) => props.theme.textColor};
`;

const Logo = () => (
  <StyledWrapper>
    <StyledImageWrapper>
      <StyledImg />
    </StyledImageWrapper>
    <StyledTittle>MISTA</StyledTittle>
  </StyledWrapper>
);

export default Logo;
