import React from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import { DarkModeContext } from './App';
import './darkModeButton.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const P = styled.p`
  padding: 0 10px;
  color: #cccccc;
  ${(props) =>
    props.isdarkmode
      ? css`
          :after {
            content: 'Switch to light mode';
          }
        `
      : css`
          :after {
            content: 'Switch to dark mode';
          }
        `}
`;

function DarkModeButton(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <div class='theme-switch-wrapper'>
              <label class='theme-switch' for='checkbox'>
                <input
                  onChange={props.toggleview}
                  type='checkbox'
                  id='checkbox'
                />
                <div class='slider round'></div>
              </label>
              <P isdarkmode={value.isDarkMode}></P>
            </div>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default DarkModeButton;
