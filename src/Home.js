import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NameHeader from './NameHeader';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import { DarkModeContext } from './App';

import './App.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  top: 55px;
  overflow-y: hidden;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 0 30px 100px 30px;
    align-items: flex-start;
  }
  @media only screen and (min-device-width: 320px) and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 17vh;
    overflow-x: hidden;
    overflow: scroll;
  }

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
  @media only screen and (min-width: 1000px) {
    width: 100%;
    height: 80vh;
  }
  @media only screen and (min-device-width: 320px) and (max-width: 1000px) {
    width: 100vw;
    float: left;
    height: auto;
    margin: 20px 0;
  }
`;

const Home = (props) => {
  const { height, width } = useWindowDimensions();
  console.log(`Height: ${height} Width: ${width}`);
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
