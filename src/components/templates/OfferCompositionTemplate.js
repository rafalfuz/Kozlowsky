import styled from "styled-components";

const CompositionTemplateWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "row-reverse" : "row")};
  justify-content: flex-start;
  padding: 2rem;
  margin: 1rem;
  height: 50vh;
  border: 0.2rem solid ${({ theme }) => theme.pageBackground};
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
`;

const StyledPicture = styled.div`
  flex-basis: 60%;
  height: 100%;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 960px) {
    flex-basis: auto;
    height: 280px;
  }
  @media screen and (max-width: 480px) {
    flex-basis: auto;
    height: 120px;
  }
`;
const StyledInfoContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-basis: auto;
  }
`;
const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0.5rem 0;
  border-bottom: 0.2rem solid ${({ theme }) => theme.pageBackground};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 2.5rem;
  text-align: center;
  width: 90%;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 100%;
  }
`;

const OfferCompositionTemplate = ({
  img,
  title,
  subtitle,
  description,
  direction,
}) => (
  <CompositionTemplateWrapper direction={direction}>
    <StyledPicture backgroundImg={img}></StyledPicture>
    <StyledInfoContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledInfoContainer>
  </CompositionTemplateWrapper>
);

export default OfferCompositionTemplate;
