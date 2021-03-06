//trying to get this to work on netlify

import React from 'react';
import NameHeader from './NameHeader.js';
import Project from './Project.js';
import { DarkModeContext } from './App';
import styled, { css } from 'styled-components';
import pic1 from './assets/images/photogram-preview.PNG';
import pic2 from './assets/images/github-app-preview.PNG';
import pic3 from './assets/images/link-harvester.PNG';
import pic4 from './assets/images/tic-tac-toe-preview.PNG';
import pic5 from './assets/images/developer-news-io-preview.PNG';
import pic6 from './assets/images/calculator-preview.PNG';
import pic7 from './assets/images/college-brochure-preview.PNG';
import pic8 from './assets/images/photo-album-preview.PNG';
import pic9 from './assets/images/pawtastic-mockup-preview.PNG';

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
  top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 25vh;
  padding: 0 40px;
  padding-top: 5vh;
`;

function Projects(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container isdarkmode={value.isDarkMode}>
            <NameHeader homeHeader='false' name='Projects' />
            <Project
              project_name='Photogram'
              git_url='https://github.com/KevinNiemeyer/photogram'
              live_url='https://kevinniemeyer.github.io/photogram/'
              description='Instagram clone that consumes the Unsplash API to display and search photos on Unsplash. Created with create-react-app using React Router, Hooks, Styled Components, Context, Link, and Infinite Scroll modules.'
              img_src={pic1}></Project>
            <Project
              project_name='GitHub Profile App'
              git_url='https://github.com/KevinNiemeyer/github-app'
              live_url='https://kevinniemeyer.github.io/github-app/'
              description='My first stab at a React.js app that uses Axios to retrieve API profile data on GitHub for two profiles and compares their stats.'
              img_src={pic2}></Project>
            <Project
              project_name='Link Harvester'
              git_url='https://github.com/KevinNiemeyer/link-harvester.git'
              live_url='https://kevinniemeyer.github.io/link-harvester/'
              description="jQuery app that harvests all links from a page's HTML code that you copy/paste in or upload from a file. Could be extended to harvest other useful information, such as metadata, tags, etc... "
              img_src={pic3}></Project>
            <Project
              project_name='Tic Tac Toe'
              git_url='https://github.com/KevinNiemeyer/tic-tac-toe.git'
              live_url='https://kevinniemeyer.github.io/tic-tac-toe/'
              description='Tic Tac Toe game app that uses jQuery and Sass/SCSS. Demonstrates my design and animation skills, along with my UI/UX and sound skills using Howler.js. All sounds/music are my own original creations'
              img_src={pic4}></Project>

            <Project
              project_name='DeveloperNews.io'
              live_url='http://developers-io.herokuapp.com/'
              description='News feed app that aggregates all articles and videos within the development ecosphere. This was a student project that I was involved with while at Bov Academy, and was written in Vue.js. I was responsible for all the frontend UI/UX design aspects, and this site showcases the Responsive Design skills I learned while at Bov.'
              img_src={pic5}></Project>

            <Project
              project_name='Calculator'
              git_url='https://github.com/KevinNiemeyer/calculator'
              live_url='https://kevinniemeyer.github.io/calculator/'
              description='My first Bov Academy project using only HTML, CSS, and JavaScript. This was an attempt to clone the iPhone calculator.'
              img_src={pic6}></Project>

            <Project
              project_name='College Brochure'
              git_url='https://github.com/KevinNiemeyer/college-brochure'
              live_url='https://kevinniemeyer.github.io/college-brochure/'
              description='This is a sort of "virtual" college brochure to give info on various courses offered. It was a project I created at Bov to learn and practice using Sass.'
              img_src={pic7}></Project>

            <Project
              project_name='Photo Album'
              git_url='https://github.com/KevinNiemeyer/photo-album'
              live_url='https://kevinniemeyer.github.io/HandlebarsPhotoAlbum/'
              description='Photo album template that I created using Handlebars that allows a user to retrieve photos using json data, and display them as a modal.'
              img_src={pic8}></Project>

            <Project
              project_name='Pawtastic Site Mockup'
              git_url='https://codepen.io/KevinNiemeyer/pen/pooEQWo'
              live_url='https://codepen.io/KevinNiemeyer/pen/pooEQWo'
              description='Just a site that I mocked up to strengthen my HTML/CSS skills'
              img_src={pic9}></Project>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default Projects;
