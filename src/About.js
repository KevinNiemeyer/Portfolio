import React from 'react';
import NameHeader from './NameHeader.js';
import styled, { css } from 'styled-components';
import { DarkModeContext } from './App';
import './App.css';
import './';
import pic from './assets/images/profile-pic.png';

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
  top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5vh 40px 0 40px;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Img = styled.div`
  border-radius: 50%;
  height: 275px;
  padding-right: 10px;
  width: 225px;
  background-color: #2badd9;
  float: left;
  shape-outside: inset(1% round 50%);
  margin-right: 50px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const P = styled.p`
  font-size: calc(0.05 * 33vw);
  text-align: justify;
  margin: -20px 50px 10px 30px;
  height: auto;
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #cccccc;
        `
      : css`
          color: #151515;
        `}
`;

const Pic = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`;
function About(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
            <NameHeader left='3' top='3' scale='3' name='About Me' />
            <Wrapper>
              <Img>
                <Pic
                  style={{ objectFit: 'scale-down' }}
                  src={pic}
                  alt='profile pic'
                />
              </Img>
              <P isdarkmode={value.isDarkMode}>
                <div>
                  I am a frontend developer with experience in JavaScript
                  (ES6+), React, React Router, Styled-Components, SASS, SCSS,
                  and other frontend modules. I also have experience working in
                  a team environment using Git and Agile methodologies. I have
                  spent the last two years teaching myself web development
                  through freeCodeCamp and the Bov Academy Frontend program. I
                  then started working with a mentor who has been mentoring me
                  for the past six months to improve my programming skills,
                  learn the best practices in web development, and become
                  familiar with industry standards in web development.{' '}
                </div>{' '}
                <div>
                  Before my career in the oil industry, I was enlisted in the
                  Air Force as a Ground Radar Technician, which is where I
                  acquired a strong foundation in Computer Science and related
                  applications.
                </div>
              </P>
            </Wrapper>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default About;

/*                <div>
                  Prior to transitioning to Web Development, I worked in the oil
                  industry as an automation engineer. I felt that the web applications I
                  worked with could be improved upon, and I became
                  interested in Web Development after working alongside the
                  in-house developers to improve the application and make it
                  more user-friendly.
                </div>*/
