import { useState } from "react";

// import Image from "../../images/IMG_2289.jpeg";
import {
  HeroContainer,
  HeroBg,
  // ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";
import { Button } from "@Components/Button";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        {/* <ImageBg src={Image} alt="norway"/> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome!</HeroH1>
        <HeroP>Please have a look around</HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
