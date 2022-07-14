import styled from "styled-components";
import ContentTemplate from "../components/templates/ContentTemplate";
import Form from "../components/organisms/Form";

const StyledKontakt = styled.div`
  display: flex;
  padding: 2rem;
  margin: 1rem;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    min-height: 50vh;
  }
`;

const StyledHeading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  } ;
`;

const StyledInfoAddress = styled.address`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    flex-basis: none;
  }
  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  } ;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;

const StyledMap = styled.iframe`
  width: 60rem;
  height: 45rem;
  border: 0;
  allowfullscreen="";
  loading="lazy" ;
  flex-basis: 70%;
  min-height: 70vh;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-basis: none;
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Kontakt = () => (
  <ContentTemplate sectionTitle="Kontakt">
    <StyledHeading>
      Jeśli masz jakiekolwiek pytania, skontaktuj się z nami. Z przyjemnością Ci
      pomożemy.
    </StyledHeading>
    <StyledKontakt>
      <StyledInfoAddress>
        <div>"MI.STA" Spółka z o.o.</div>
        <div>Koszelówka 5, 09-520 Łąck</div>
        <StyledLink href="tel:+48242628615">Tel. 024 262-86-15</StyledLink>
        <StyledLink href="tel:+48242771830">Tel./Fax 024 277-18-30</StyledLink>
        <StyledLink href="mailto:poczta@mi-sta.pl">
          e-mail: poczta@mi-sta.pl
        </StyledLink>
      </StyledInfoAddress>
      <StyledMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.5307368072763!2d19.709740586558745!3d52.423683829978195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c7618ee7e9e67%3A0xe19575d04f94e6cd!2sMi.Sta!5e0!3m2!1spl!2spl!4v1641825687340!5m2!1spl!2spl"></StyledMap>
    </StyledKontakt>
    <StyledFormWrapper>
      <StyledHeading>Formularz kontaktowy</StyledHeading>
      <Form />
    </StyledFormWrapper>
  </ContentTemplate>
);

export default Kontakt;
