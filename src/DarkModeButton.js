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
  padding: 0 calc(0.01 * 100vw);
  font-size: calc(0.01 * 100vw);
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

const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  & input {
    display: none;
  }
`;
//this still needs to be fixed so I don't have a CSS style sheet

function DarkModeButton(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <ThemeSwitchWrapper>
              <ThemeSwitch htmlFor='checkbox'>
                <input
                  onChange={props.toggleview}
                  type='checkbox'
                  id='checkbox'
                />
                <div className='slider round'></div>
              </ThemeSwitch>
              <P isdarkmode={value.isDarkMode}></P>
            </ThemeSwitchWrapper>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default DarkModeButton;
