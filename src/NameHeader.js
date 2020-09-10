import React from 'react';
import { DarkModeContext } from './App';
import styled, { css } from 'styled-components';

import './App.css';

const Container = styled.div`
  width: 100%;
`;

const Heading = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: ${(props) =>
    props.isHomeHeader ? css`calc(.18 * 33vw)` : css`calc(.10 * 33vw)`};
  text-shadow: 1px 1px 3px #3f7fbf;
  animation: fadeIn 2.5s linear forwards;
  animation: color-change 30s infinite;
  @media only screen and (min-width: 1224px) {
    text-align: left;
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    text-align: center;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes color-change {
    15% {
      color: red;
    }
    30% {
      color: orange;
    }
    45% {
      color: yellow;
    }
    60% {
      color: green;
    }
    75% {
      color: blue;
    }
    75% {
      color: indigo;
    }
    75% {
      color: purple;
    }
  }
`;

const Subheading = styled.h3`
  width: 100%;
  font-size: calc(0.05 * 33vw);
  padding: 10px 10px;

  @media only screen and (min-width: 1000px) {
    text-align: right;
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    text-align: center;
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

function NameHeader(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <Heading isHomeHeader={props.isHomeHeader}>{props.name}</Heading>
            <Subheading isdarkmode={value.isDarkMode}>
              {props.subheading}
            </Subheading>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}
export default NameHeader;
