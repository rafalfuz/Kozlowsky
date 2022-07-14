import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ flexBasis }) => flexBasis + "%"};
  justify-content: flex-start;
  margin: 1rem;
`;

const StyledTittle = styled.p`
  font-weight: ${(theme) => theme.bold};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 1rem;
`;

const FooterDatasTemplate = ({ title, children, flexBasis }) => (
  <StyledWrapper flexBasis={flexBasis}>
    <StyledTittle>{title}</StyledTittle>
    {children}
  </StyledWrapper>
);

export default FooterDatasTemplate;
