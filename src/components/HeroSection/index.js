import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted />
      </HeroBg>

      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>

        <HeroP>
          Sign up for a new account today and reiceive $250 in creadit towards
          your next payment.
        </HeroP>

        <HeroBtnWrapper>
          <Button
            to="singup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
