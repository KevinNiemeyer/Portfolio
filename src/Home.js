import React from 'react';
import styled from 'styled-components';
import NameHeader from './NameHeader';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 20px 0 20px;
  height: 80vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: calc(100vw / 3);
  height: 80vh;
`;

const Home = (props) => {
  return (
    <Container>
      <Wrapper>
        <NameHeader
          isHomeHeader={true}
          name='Kevin Niemeyer'
          subheading='Developer / Designer / Human'
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
