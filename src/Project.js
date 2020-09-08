import React from 'react';
import styled, { css } from 'styled-components';
import { DarkModeContext } from './App';
import './App.css';

const Container = styled.div`
  ${(props) =>
    props.isdarkmode
      ? css`
          background-color: #252525;
        `
      : css`
          background-color: #dddddd;
        `}
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const UL = styled.ul`
  display: flex;
  list-style-type: none;
`;
const LI = styled.li`
  font-size: calc(0.01 * 100vw);
  padding: 20px 0;
  text-decoration: none;
`;

const A = styled.a`
  color: blue;
`;

const Img = styled.img`
  transition: all 0.5s linear;
  width: calc(0.3 * 100vw);
  border: solid lightgrey 1px;
  margin-top: 10px;
  &:hover {
    transform: scale(1.05) translateX(12px);
  }
  height: auto;
`;

const H3 = styled.h3`
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #cccccc;
        `
      : css`
          color: #151515;
        `}

  padding: 5px;
`;

const H2 = styled.h2`
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #cccccc;
        `
      : css`
          color: #151515;
        `}
  padding: 5px;
  text-decoration: underline;
`;

const Demo = styled.h3`
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #cccccc;
        `
      : css`
          color: blue;
        `}
`;

function Project(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
            <UL>
              <LI>
                <H2 isdarkmode={value.isDarkMode}>
                  Project:{' '}
                  <span style={{ color: 'orange' }}>{props.project_name}</span>
                </H2>
                <H3 isdarkmode={value.isDarkMode}>
                  Description:{' '}
                  <span style={{ color: 'cornflowerblue' }}>
                    {props.description}
                  </span>
                </H3>
                <H3 isdarkmode={value.isDarkMode}>
                  GitHub Repository:&nbsp;
                  <A href={props.git_url}>{props.git_url}</A>
                </H3>
                <div style={{ marginLeft: '5px' }}>
                  <A href={props.live_url}>
                    <Demo isdarkmode={value.isDarkMode}>Live Demo:</Demo>
                    <Img
                      src={require(`${props.img_src}`)}
                      alt={props.project_name}
                    />
                  </A>
                </div>
              </LI>
            </UL>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default Project;
