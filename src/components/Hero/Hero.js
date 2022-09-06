import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* Welcome To <br />
          My Personal Portfolio */}
          Tyson Lukale
        </SectionTitle>
        <SectionText>
          I'm a frontend developer with a passion for building beautiful,professional web applications,<b/>
          Architectural and Interior Designer and currently learning backend technologies. 
          '
        </SectionText>
        <Button onClick={props.handleClick}>Read More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;