import React from 'react';
import styled from 'styled-components';
import BumperSticker from './BumperSticker';
import SocialIcons from './SocialIcons';
import './App.css';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  display: flex;
  background-color: #252525;
  color: lightgrey;
  overflow: auto;
`;

const Email = styled.div`
  font-size: calc(0.012 * 100vw);
  color: cornflowerblue;
  width: 100%;
  text-align: center;
  & a {
    color: inherit;
    transition: all 0.2s ease-in;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

function Footer(props) {
  return (
    <Container>
      <SocialIcons></SocialIcons>
      <Email>
        Email:{' '}
        <a href='mailto:kevthedev2020@gmail.com'>kevthedev2020@gmail.com</a>
      </Email>
      <BumperSticker></BumperSticker>
    </Container>
  );
}

export default Footer;
