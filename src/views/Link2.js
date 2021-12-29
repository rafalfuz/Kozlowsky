import React from "react";
import styled from "styled-components";

const StyledZdrowoWrapper = styled.section`
    background-color: ${(props) => props.theme.pageBackground}
    color: ${(props) => props.theme.textColor};
`;

const Link2 = () => (
  <StyledZdrowoWrapper>
    <h1>Link2</h1>
    <p>-[W BUDOWIE...]-</p>
  </StyledZdrowoWrapper>
);

export default Link2;
