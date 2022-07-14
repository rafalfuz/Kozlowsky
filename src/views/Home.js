import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import { Carousel } from "react-responsive-carousel";
import ContentTemplate from "../components/templates/ContentTemplate";
import Banner1 from "../assets/Carousel/banner1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner2 from "../assets/Carousel/banner2.jpg";
import Banner3 from "../assets/Carousel/banner3.jpg";
import Banner4 from "../assets/Carousel/banner4.jpg";
import Banner5 from "../assets/Carousel/banner5.jpg";
import Banner6 from "../assets/Carousel/banner6.jpg";
import Banner7 from "../assets/Carousel/banner7.jpg";
import Banner8 from "../assets/Carousel/banner8.jpg";
import Banner9 from "../assets/Carousel/banner9.jpg";

const StyledHome = styled.div`
  text-transfort: uppercase;
  text-align: center;
`;

const StyledCarouselWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Home = () => (
  <ContentTemplate sectionTitle="Strona głowna">
    <Heading width="75%" padding="2rem" margin="1rem auto">
      Witamy na stronie firmy MI.STA Sp. z o.o. znanego i cenionego na rynku
      polskim producenta i dystrybutora biżuterii ze srebra. Nasza specjalizacja
      to produkcja i sprzedaż hurtowa biżuterii srebrnej. Naszym klientom
      oferujemy ponad 3000 wzorów perfekcyjnie wykonanej biżuterii.. Jeżeli
      poszukujecie Państwo różnorodnych, modnych i starannie wykonanych wzorów,
      to nasza firma będzie dla Państwa idealnym partnerem. Producentom polecamy
      usługi galwaniczne.
    </Heading>
    <StyledHome>
      <StyledCarouselWrapper>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          draggable={true}
          fade={true}
        >
          <div>
            <img src={Banner1} alt="" />
          </div>
          <div>
            <img src={Banner2} alt="" />
          </div>
          <div>
            <img src={Banner3} alt="" />
          </div>
          <div>
            <img src={Banner4} alt="" />
          </div>
          <div>
            <img src={Banner5} alt="" />
          </div>
          <div>
            <img src={Banner6} alt="" />
          </div>
          <div>
            <img src={Banner7} alt="" />
          </div>
          <div>
            <img src={Banner8} alt="" />
          </div>
          <div>
            <img src={Banner9} alt="" />
          </div>
        </Carousel>
      </StyledCarouselWrapper>
      <Heading width="75%" padding="2rem" margin="1rem auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolorem
        error culpa quisquam molestiae nihil cumque, aut aliquam veritatis,
        quibusdam fugiat ipsa amet fuga temporibus adipisci sunt nemo officiis
        necessitatibus! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Repellat molestias unde laboriosam iste consequuntur eius, tenetur
        laborum nihil atque velit dolorem sapiente labore cum pariatur ullam,
        beatae, voluptatibus reprehenderit! Repellat. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. eaque.
      </Heading>
    </StyledHome>
  </ContentTemplate>
);

export default Home;
