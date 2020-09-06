import React from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import { DiReact } from 'react-icons/di';
import { IoIosHeart } from 'react-icons/io';
const Container = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

const HeartIcon = styled(IoIosHeart)`
  color: red;
  font-size: 125%;
  padding: 0 5px;
  animation: pulse 1s linear infinite;
  @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

const ReactIcon = styled(DiReact)`
  color: cornflowerblue;
  font-size: 125%;
  animation: spin 5s linear infinite;
  padding: 0 5px;
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

function BumperSticker(props) {
  return (
    <Container>
      This site was made with <HeartIcon /> and <ReactIcon />
    </Container>
  );
}

export default BumperSticker;
