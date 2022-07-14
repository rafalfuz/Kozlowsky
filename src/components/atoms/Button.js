import styled from "styled-components";

const StyledButton = styled.button.attrs({
  type: "submit",
  value: "Submit",
})`
  width: ${({ width }) => width || "14rem"};
  height: ${({ height }) => height || "3rem"};
  background-color: ${({ theme }) => theme.contentBackground};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.textColor};
  text-transform: uppercase;
  border-radius: 2rem;
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.textColor};
  :hover {
    background-color: ${({ theme }) => theme.pageBackground};
    font-weight: ${({ theme }) => theme.bold};
    cursor: pointer;
  }
`;

const Button = ({
  width,
  height,
  backgroundColor,
  fontSize,
  color,
  children,
}) => (
  <StyledButton
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    color={color}
  >
    {children}
  </StyledButton>
);

export default Button;
