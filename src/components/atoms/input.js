import styled from "styled-components";

const Input = styled.input`
  width: ${({ width }) => width || "280px"};
  height: ${({ height }) => height};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.s};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ theme }) => theme.contentBackground};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  transition: all 0.5s;
  outline: 0;
  border: 0;
  padding: 0.5rem 0;
  border-bottom: 0.2rem solid ${({ theme }) => theme.pageBackground};
  box.shadow: none;
`;
export default Input;
