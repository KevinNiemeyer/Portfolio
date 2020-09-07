import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  height: 80vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: 33%;
`;

const Home = (props) => {
  return (
    <Container>
      <Wrapper>
        <Header
          name='Kevin Niemeyer'
          subheading='Developer / Designer / Human'
          top='-3'
          left='5'
          scale='7'
        />
      </Wrapper>
      <Wrapper>
        <Skills />
      </Wrapper>
      <Wrapper>
        <RandomQuote />
      </Wrapper>
    </Container>
  );
};

export default Home;
