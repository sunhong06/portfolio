import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Header from '../component/header/Header';
import { styled } from 'styled-components';
import Container from '../component/Container';

const Main = styled.main`
  background-color: #f9f9f9;
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </Main>
    </>
  );
};

export default Home;
