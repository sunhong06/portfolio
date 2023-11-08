import React from 'react';
import { styled } from 'styled-components';
import AboutDetail from '../component/About/AboutDetail';
import AboutProfile from '../component/About/AboutProfile';
import AboutMe from '../component/About/AboutMe';

const AboutDiv = styled.section`
  padding: 100px 0;
  border-bottom: 2px dashed #999;
`;

const About: React.FC = () => {
  return (
    <AboutDiv id='1'>
      <AboutMe />
      <AboutDetail />
      <AboutProfile />
    </AboutDiv>
  );
};

export default About;
