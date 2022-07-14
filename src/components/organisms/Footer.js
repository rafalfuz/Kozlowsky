import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import FooterDatasTemplate from "../templates/FooterDatasTemplate";
import Button from "../atoms/Button";

const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    height: 95%;
  }
`;
const StyledFooterData = styled.div`
  flex-basis: 80%;
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const StyledInfoAddress = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  gap: 1rem;
`;

const StyledInfoLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0.5rem 0;
  gap: 1rem;
`;

const StyledAuthor = styled.p`
  flex-basis: 20%;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  align-items: center;
  padding: 0.5rem;
  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
  }
`;

const StyledInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 1rem;
  margin: 0.5rem 0;
`;

const StyledMailNote = styled.p`
  width: 75%;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;

const Footer = () => (
  <StyledFooterWrapper>
    <hr />
    <StyledFooterData>
      <FooterDatasTemplate title="Dane kontaktowe" flexBasis={25}>
        <StyledInfoAddress>
          <div>"MI.STA" Spółka z o.o.</div>
          <div>Koszelówka 5, 09-520 Łąck</div>
          <StyledLink href="tel:+48242628615">Tel. 024 262-86-15</StyledLink>
          <StyledLink href="tel:+48242771830">
            Tel./Fax 024 277-18-30
          </StyledLink>
          <StyledLink href="mailto:poczta@mi-sta.pl">
            e-mail: poczta@mi-sta.pl
          </StyledLink>
        </StyledInfoAddress>
      </FooterDatasTemplate>
      <FooterDatasTemplate title="Link" flexBasis={25}>
        <StyledInfoLinks>
          <div>Regulamin</div>
          <div>Katalog do pobrania</div>
          <div>Cennik</div>
          <div>Poradnik</div>
        </StyledInfoLinks>
      </FooterDatasTemplate>
      <FooterDatasTemplate title={<BiMessageDetail />} flexBasis={50}>
        <StyledInfoForm>
          <StyledMailNote>
            W razie pytań, służymy pomocą. Wypełnij formularz, a skontaktujemy
            się z Tobą!
          </StyledMailNote>
          <Link to="/kontakt">
            <Button width="280px" height="40px">
              Formularz kontaktowy
            </Button>
          </Link>
        </StyledInfoForm>
      </FooterDatasTemplate>
    </StyledFooterData>
    <hr />
    <StyledAuthor>
      <StyledLink href="mailto:rafalfuz@gmail.com">
        Website by Rafał Fuz
      </StyledLink>
    </StyledAuthor>
  </StyledFooterWrapper>
);
export default Footer;
