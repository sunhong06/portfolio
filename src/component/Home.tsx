import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
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
