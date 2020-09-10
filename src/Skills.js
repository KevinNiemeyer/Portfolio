import React from 'react';
import styled, { css } from 'styled-components';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  display: flex;
  @media only screen and (min-width: 1000px) {
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    width: 100%;
  }
`;

const Divider = styled.div`
  position: relative;
  top: 20%;
  left: calc(0.04 * 100vw);
  font-size: calc(0.011 * 100vw);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 20px;
  font-weight: bold;
  color: darkgrey;
  height: 50vh;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
`;

const PerspectiveText = styled.div`
  position: relative;
  top: 25%;
  left: 20px;
  font-family: Arial;
  font-size: 40px;
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
            <Divider>Skills</Divider>
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
