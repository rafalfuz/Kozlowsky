import React from "react";
import styled from "styled-components";

const StyledZdrowoWrapper = styled.section`
    background-color: ${(props) => props.theme.pageBackground}
    color: ${(props) => props.theme.textColor};
`;

const Link3 = () => (
  <StyledZdrowoWrapper>
    <h1>Link3</h1>
    <p>-[W BUDOWIE...]-</p>
  </StyledZdrowoWrapper>
);

export default Link3;
