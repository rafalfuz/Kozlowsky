import ContentTemplate from "../components/templates/ContentTemplate";
import OfferCompositionTemplate from "../components/templates/OfferCompositionTemplate";
import Silver from "../assets/Silver.jpg";
import Ring from "../assets/Ring.jpg";
import WorkingMan from "../assets/silverCreator.jpg";

const Oferta = () => (
  <ContentTemplate sectionTitle="Oferta">
    <OfferCompositionTemplate
      direction="true"
      img={Silver}
      title="Srebrna bransoletka"
      subtitle="Nowoczesny wzorzec"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia dictum neque, quis tempor quam ullamcorper et. Proin a feugiat elit. Proin interdum ornare justo, vel tempor nunc commodo eu. Vestibulum sed elit nec quam sodales ultricies."
    />
    <OfferCompositionTemplate
      img={WorkingMan}
      title="Indywidualne zamównienia"
      subtitle="z gwarancją najwyższej jakości"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia dictum neque, quis tempor quam ullamcorper et. Proin a feugiat elit. Proin interdum ornare justo, vel tempor nunc commodo eu. Vestibulum sed elit nec quam sodales ultricies."
    />
    <OfferCompositionTemplate
      direction="true"
      img={Ring}
      title="Pierścionek zaręczynowy"
      subtitle="Może to juz pora?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia dictum neque, quis tempor quam ullamcorper et. Proin a feugiat elit. Proin interdum ornare justo, vel tempor nunc commodo eu. Vestibulum sed elit nec quam sodales ultricies."
    />
    <OfferCompositionTemplate
      img={Silver}
      title="Srebrna bransoletka"
      subtitle="Nowoczesny wzorzec"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia dictum neque, quis tempor quam ullamcorper et. Proin a feugiat elit. Proin interdum ornare justo, vel tempor nunc commodo eu. Vestibulum sed elit nec quam sodales ultricies."
    />
    <OfferCompositionTemplate
      direction="true"
      img={Ring}
      title="Pierścionek zaręczynowy"
      subtitle="Może to juz pora?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia dictum neque, quis tempor quam ullamcorper et. Proin a feugiat elit. Proin interdum ornare justo, vel tempor nunc commodo eu. Vestibulum sed elit nec quam sodales ultricies."
    />
  </ContentTemplate>
);

export default Oferta;
