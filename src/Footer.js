import React from 'react';
import styled, { css } from 'styled-components';
import BumperSticker from './BumperSticker';
import SocialIcons from './SocialIcons';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75px;

  color: lightgrey;
  overflow: auto;

  ${(props) =>
    props.isdarkmode
      ? css`
          background-color: #151515;
        `
      : css`
          background-color: #353535;
        `}
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
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
            <SocialIcons></SocialIcons>
            <Email>
              Email:{' '}
              <a href='mailto:kevthedev2020@gmail.com'>
                kevthedev2020@gmail.com
              </a>
            </Email>
            <BumperSticker></BumperSticker>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}
export default Footer;
