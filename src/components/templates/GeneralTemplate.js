import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;

const GeneralTemplate = ({ children, props }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default GeneralTemplate;
