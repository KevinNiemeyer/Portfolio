import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import './App.css';
import './';
import pic from './assets/images/profile-pic.png';
const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 20px;
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
  margin-left: 30px;
  margin-right: 50px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const P = styled.p`
  font-size: 1.5vw;
  text-align: justify;
  margin: -20px 50px 10px 30px;
  height: auto;
`;

const Pic = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`;

function About(props) {
  return (
    <Container>
      <Header left='3' top='3' scale='3' name='About Me' />
      <Wrapper>
        <Img>
          <Pic
            style={{ objectFit: 'scale-down' }}
            src={pic}
            alt='profile pic'
          />
        </Img>
        <P>
          <div>
            I am a frontend developer with experience in JavaScript (ES6+),
            React, styled-components, SASS, SCSS, and other frontend modules. I
            have experience working in a team environment using Git and agile
            methodologies. I spent the last two years teaching myself web
            development through the freeCodeCamp, and Bov Academy programs. I
            then started working with a mentor who has been mentoring me for the
            past six months, to improve my programming skills, project
            management and understanding the best practices in web development
            and in the workplace in general.{' '}
          </div>{' '}
          <div>
            Prior to transitioning to Web Development, I worked in the oil
            industry in an automation engineering capacity. The web applications
            we worked with were lacking in design and function, and I became
            interested in Web Development after working alongside the in-house
            developers to improve the application and make it more user
            friendly. Prior to the Oil Industry, I was enlisted in the Air Force
            as a Ground Radar Technician, which is where I acquired a strong
            foundation in Computer Science and related applications.
          </div>
        </P>
      </Wrapper>
    </Container>
  );
}

export default About;
