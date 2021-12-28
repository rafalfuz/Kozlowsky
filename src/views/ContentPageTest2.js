import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const StyledSubtitle = styled.h2`
  background-color: ${(props) => props.theme.textColor};
`;

const StyledParagraph = styled.p`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;

const ContentPageTest2 = (props) => (
  <>
    <StyledTitle>The Last Duel</StyledTitle>
    <StyledSubtitle>The action movie</StyledSubtitle>
    <StyledParagraph>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, officiis.
      Numquam sit harum tenetur necessitatibus vitae obcaecati saepe nisi, dolor
      sunt adipisci iste placeat. Deserunt pariatur accusantium soluta
      praesentium laborum!
    </StyledParagraph>
  </>
);

export default ContentPageTest2;
