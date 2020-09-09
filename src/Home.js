import React from 'react';
import styled, { css } from 'styled-components';
import NameHeader from './NameHeader';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  top: 10vh;
  padding: 10vh 30px 0px 30px;
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
  overflow-y: hidden;
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
                subheading='Developer / Designer / Programmer'
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
