import React from 'react';
import styled, { css } from 'styled-components';
import NameHeader from './NameHeader';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  padding: 100px 20px 0 20px;
  height: 80vh;
  width: 100%;
  ${(props) =>
    props.isdarkmode
      ? css`
          background-color: #252525;
        `
      : css`
          background-color: #dddddd;
        `}
`;
const Wrapper = styled.div`
  display: flex;
  width: calc(100vw / 3);
  height: 80vh;
`;

const Home = (props) => {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
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
      }}
    </DarkModeContext.Consumer>
  );
};
export default Home;
