import styled from "styled-components";

const Textarea = styled.textarea`
  width: ${({ width }) => width || "28rem"};
  height: ${({ height }) => height};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.m};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.textColor};
  outline: 0;
  border: 0;
  padding: 1rem;
  border-bottom: 2rem solid ${({ theme }) => theme.pageBackground};
  box.shadow: none;
  max-width: 60rem;
  max-height: 40rem;
  min-width: 15rem;
  min-height: 10rem;
  @media screen and (max-width: 960px) {
    width: 32rem;
    font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.s};
    height: 30vh;
    max-width: 90rem;
    max-height: 60rem;
    min-width: 40rem;
    min-height: 10rem;
  }
  @media screen and (max-width: 480px) {
    width: 27.5rem;
    font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.s};
    height: 25vh;
    max-width: 45rem;
    max-height: 40rem;
    min-width: 15rem;
    min-height: 10rem;
  }
`;
export default Textarea;
