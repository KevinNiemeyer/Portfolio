import React from 'react';
import styled, { css } from 'styled-components';

import './App.css';

const Container = styled.div`
  margin-left: 20px;
  width: 100%;
`;

const Heading = styled.h1`
  text-align: left;
  font-family: 'Orbitron', sans-serif;
  font-size: ${(props) =>
    props.isHomeHeader ? css`calc(.18 * 33vw)` : css`calc(.10 * 33vw)`};
  text-shadow: 1px 1px 3px #3f7fbf;
  mix-blend-mode: screen;
  animation: fadeIn 2.5s linear forwards;
  animation: color-change 30s infinite;
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
  text-align: right;
  font-size: calc(0.05 * 33vw);
  color: #555555;
  padding: 10px 0;
`;

function NameHeader(props) {
  console.log(props);
  return (
    <Container>
      <Heading isHomeHeader={props.isHomeHeader}>{props.name}</Heading>
      <Subheading>{props.subheading}</Subheading>
    </Container>
  );
}

export default NameHeader;

//asdfasdfasdfasdf
