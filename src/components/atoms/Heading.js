import styled from "styled-components";

const StyledHeading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || "auto auto"};
  padding: ${({ padding }) => padding || "auto auto"};
  @media screen and (max-width: 960px) {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0.5rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const Heading = ({ children, width, margin, padding }) => (
  <StyledHeading width={width} margin={margin} padding={padding}>
    {children}
  </StyledHeading>
);

export default Heading;
