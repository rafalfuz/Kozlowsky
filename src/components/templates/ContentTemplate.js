import React from "react";
import styled from "styled-components";
import Footer from "../organisms/Footer";

const StyledContentTemplateWrapper = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
  min-height: 100vh;
`;

const StyledContentTemplate = styled.div`
  width: 80%;
  background-color: ${(props) => props.theme.contentBackground};
  box-shadow: 0 1rem 3rem -1rem hsla(0, 0%, 0%, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

const StyledTitle = styled.h2`
  margin-top: 2rem;
  text-align: center;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l}
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m}
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m}
  }
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ContentTemplate = ({ sectionTitle, children }) => (
  <StyledContentTemplateWrapper>
    <StyledContentTemplate>
      <StyledTitle>{sectionTitle}</StyledTitle>
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledContentTemplate>
  </StyledContentTemplateWrapper>
);

export default ContentTemplate;
