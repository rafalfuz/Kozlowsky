import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import ContentTemplate from "../components/templates/ContentTemplate";
import Jeweler from "../assets/Jeweler.jpg";
const StyledOnas = styled.div`
  text-transfort: uppercase;
`;
const StyledImage = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2rem 0;
`;
const Onas = () => (
  <ContentTemplate sectionTitle="O nas">
    <Heading>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt
      iste dolorum consequatur obca. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quis voluptatibus veniam dolorem nostrum dignissimos et,
      dolore facere aliquid vero, vel in aspernatur reprehenderit, consequatur a
      provident doloribus? Cum, modi pariatur.
    </Heading>
    <StyledOnas>
      <StyledImage image={Jeweler} />
      <Heading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt
        iste dolorum consequatur obca. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis voluptatibus veniam dolorem nostrum dignissimos
        et, dolore facere aliquid vero, vel in aspernatur reprehenderit,
        consequatur a provident doloribus? Cum, modi pariatur.
      </Heading>
      <StyledImage image={Jeweler} />
      <Heading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt
        iste dolorum consequatur obca. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis voluptatibus veniam dolorem nostrum dignissimos
        et, dolore facere aliquid vero, vel in aspernatur reprehenderit,
        consequatur a provident doloribus? Cum, modi pariatur.
      </Heading>
    </StyledOnas>
  </ContentTemplate>
);

export default Onas;
