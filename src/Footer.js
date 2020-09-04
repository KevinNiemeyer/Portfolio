import React from 'react';
import styled from 'styled-components';
import BumperSticker from './BumperSticker';
import './App.css';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  display: flex;
  background-color: #252525;
  font-size: 12px;
  color: lightgrey;
  overflow: auto;
`;

function Footer(props) {
  return (
    <Container>
      @Kevin Niemeyer 2020
      <BumperSticker></BumperSticker>
    </Container>
  );
}

export default Footer;
