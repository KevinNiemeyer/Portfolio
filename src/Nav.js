import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import { DarkModeContext } from './App';
import DarkModeButton from './DarkModeButton';
import './App.css';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  display: flex;

  ${(props) =>
    props.isdarkmode
      ? css`
          background-color: #151515;
        `
      : css`
          background-color: #353535;
        `}
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: cornflowerblue;
  font-weight: bold;
  display: inline;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  &:hover {
    color: white;
  }
  padding: 0 calc(0.015 * 100vw);
  transition: all 0.3s;
`;

function Nav(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
            <Logo x={35} y={0} w={50} h={40} />{' '}
            <NavLinks className='navigation-sub'>
              <StyledLink to='/'>Home</StyledLink>
              <StyledLink to='/projects'>Projects</StyledLink>
              <StyledLink to='/about'>About Me</StyledLink>
            </NavLinks>
            <DarkModeButton toggleview={props.toggleview}>
              Dark Mode
            </DarkModeButton>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default Nav;
