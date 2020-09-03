import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
function About(props) {
  return (
    <Container>
      <Header left='3' top='3' scale='3' name='About Me' />
      <p>
        I am a frontend developer with experience in JavaScript (ES6+), React,
        styled-components, SASS, SCSS, and other frontend modules. I have
        experience working in a team like environment using Git and agile
        methodologies. I spent the last two years teaching myself web
        development through the freeCodeCamp, and Bov Academy programs. I then
        started working with Cristian Florea who has been mentoring me for the
        past three months, to improve my programming skills, project management
        and understanding the best practices in web development and in the
        workplace in general. Prior to transitioning to Web Development, I
        worked in the oil industry in an automation engineering capacity. The
        web applications we worked with were lacking in design and function, and
        I became interested in Web Development after working alongside the
        in-house developers to improve the application and make it more user
        friendly. Prior to the Oil Industry, I was enlisted in the Air Force as
        a Ground Radar Technician, which is where I acquired a strong foundation
        in Computer Science and related applications.
      </p>
    </Container>
  );
}

export default About;
