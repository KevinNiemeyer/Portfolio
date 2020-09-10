import React from 'react';
import styled, { css } from 'styled-components';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media only screen and (min-width: 1000px) {
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    justify-content: center;
    left: -75px;
  }
`;

const Divider = styled.div`
  position: relative;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  height: 50vh;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  letter-spacing: calc(0.02 * 100vw);
  top: 20vh;

  @media only screen and (min-width: 1000px) {
    left: calc(0.045 * 100vw);
    font-size: calc(0.011 * 100vw);
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    top: 5vh;
    left: calc(0.05 * 100vw);
    font-size: calc(0.02 * 100vw);
  }
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #aaaaaa;
        `
      : css`
          color: #252525;
        `}
`;

const PerspectiveText = styled.div`
  position: relative;
  font-size: 40px;
  @media only screen and (min-width: 1000px) {
    top: 25%;
    left: calc(0.015 * 100vw);
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    top: 10%;
  }
  font-family: Arial;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  &:hover p {
    transform: translate(0, -50px);
  }
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #252525;
        `
      : css`
          color: #cccccc;
        `}

  @media only screen and (min-width: 1000px) {
    font-size: calc(0.026 * 100vw);
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    font-size: calc(0.04 * 100vw);
  }
`;

const PerspectiveLine = styled.div`
  height: 50px;
  @media only screen and (min-width: 1000px) {
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
  }
  overflow: hidden;
  position: relative;
  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.337);
  }
  &:nth-child(1) {
    left: 29px;
    ${(props) =>
      props.isdarkmode
        ? css`
            color: #cccccc;
          `
        : css`
            color: #252525;
          `}
  }
  &:nth-child(2) {
    left: 58px;
    background: cornflowerblue;
  }
  &:nth-child(3) {
    left: 87px;
    background: green;
  }
  &:nth-child(4) {
    left: 116px;
    background: red;
  }
  &:nth-child(5) {
    left: 145px;
    ${(props) =>
      props.isdarkmode
        ? css`
            color: #cccccc;
          `
        : css`
            color: #252525;
          `}
  }
`;

const P = styled.p`
  text-align: center;
  margin: 0;
  height: 50px;
  line-height: 50px;
  transition: transform 0.5s ease-in-out;
`;

function Skills(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <Divider isdarkmode={value.isDarkMode}>Skills</Divider>
            <PerspectiveText isdarkmode={value.isDarkMode}>
              <PerspectiveLine isdarkmode={value.isDarkMode}>
                <P />
                <P>React</P>
              </PerspectiveLine>
              <PerspectiveLine isdarkmode={value.isDarkMode}>
                <P>React</P>
                <P>JavaScript</P>
              </PerspectiveLine>
              <PerspectiveLine isdarkmode={value.isDarkMode}>
                <P>JavaScript</P>
                <P>CSS</P>
              </PerspectiveLine>
              <PerspectiveLine isdarkmode={value.isDarkMode}>
                <P>CSS</P>
                <P>HTML</P>
              </PerspectiveLine>
              <PerspectiveLine isdarkmode={value.isDarkMode}>
                <P>HTML</P>
                <P />
              </PerspectiveLine>
            </PerspectiveText>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}
export default Skills;
