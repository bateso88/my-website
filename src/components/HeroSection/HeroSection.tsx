// import '../App.css';
import {
  HeroContainer,
  HeroSubtitle,
  HeroTitle,
  HeroButtonContainer,
  HeroButton,
} from "./styles";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroTitle>WELCOME!</HeroTitle>
      <HeroSubtitle>Feel free to look around</HeroSubtitle>
      <HeroButtonContainer>
        <HeroButton
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Explore
        </HeroButton>
      </HeroButtonContainer>
    </HeroContainer>
  );
}

export default HeroSection;
