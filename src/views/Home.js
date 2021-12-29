import React from "react";
import styled from "styled-components";

const StyledZdrowoWrapper = styled.section`
    background-color: ${(props) => props.theme.pageBackground}
    color: ${(props) => props.theme.textColor};
`;

const Home = () => (
  <StyledZdrowoWrapper>
    <h1>Home</h1>
    <p>-[W BUDOWIE...]-</p>
  </StyledZdrowoWrapper>
);

export default Home;
