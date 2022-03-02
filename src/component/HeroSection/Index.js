import React, { useState } from "react";
import { BtnSpan, Button } from "../ButtonElements";
import video from "../../video/space.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroSpan,
  HeroP,
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
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Welcome ,Virtual <HeroSpan></HeroSpan>{" "}
        </HeroH1>
        <HeroH1>
          Banking Made <HeroSpan></HeroSpan>{" "}
        </HeroH1>
        <HeroH1>
          Easy and Accessible <HeroSpan></HeroSpan>
        </HeroH1>
        <HeroP>
          Sign Up for a new Account and get $150 Discount in your first Deposit
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
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
            <BtnSpan>
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnSpan>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
