//trying to get this to work on netlify

import React from 'react';
import Header from './Header.js';
import Project from './Project.js';
import styled from 'styled-components';

import './App.css';

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 10vh;
`;

function Projects(props) {
  return (
    <Container>
      <Header left='3' top='3' scale='3' name='Projects' />
      <Project
        project_name='Photogram'
        git_url='https://github.com/KevinNiemeyer/photogram'
        live_url='https://kevinniemeyer.github.io/photogram/'
        description='Instagram clone that consumes the Unsplash API to display and search photos on Unsplash. Created with create-react-app using React Router, Hooks, Styled Components, Context, Link, and Infinite Scroll modules.'
        img_src='./assets/images/photogram-preview.png'></Project>
      <Project
        project_name='GitHub Profile App'
        git_url='https://github.com/KevinNiemeyer/github-app'
        live_url='https://kevinniemeyer.github.io/github-app/'
        description='My first stab at a React.js app that uses Axios to retrieve API profile data on GitHub for two profiles and compares their stats.'
        img_src='./assets/images/github-app-preview.png'></Project>
      <Project
        project_name='Link Harvester'
        git_url='https://github.com/KevinNiemeyer/link-harvester.git'
        live_url='https://kevinniemeyer.github.io/link-harvester/'
        description="jQuery app that harvests all links from a page's HTML code that you copy/paste in or upload from a file. Could be extended to harvest other useful information, such as metadata, tags, etc... "
        img_src='./assets/images/link-harvester.png'></Project>
      <Project
        project_name='Tic Tac Toe'
        git_url='https://github.com/KevinNiemeyer/tic-tac-toe.git'
        live_url='https://kevinniemeyer.github.io/tic-tac-toe/'
        description='Tic Tac Toe game app that uses jQuery and Sass/SCSS. Demonstrates my design and animation skills, along with my UI/UX and sound skills using Howler.js. All sounds/music are my own original creations'
        img_src='./assets/images/tic-tac-toe-preview.png'></Project>

      <Project
        project_name='DeveloperNews.io'
        live_url='http://developers-io.herokuapp.com/'
        description='News feed app that aggregates all articles and videos within the development ecosphere. This was a student project that I was involved with while at Bov Academy, and was written in Vue.js. I was responsible for all the frontend UI/UX design aspects, and this site showcases the Responsive Design skills I learned while at Bov.'
        img_src='./assets/images/developer-news-io-preview.png'></Project>

      <Project
        project_name='Calculator'
        git_url='https://github.com/KevinNiemeyer/calculator'
        live_url='https://kevinniemeyer.github.io/calculator/'
        description='My first Bov Academy project using only HTML, CSS, and JavaScript. This was an attempt to clone the iPhone calculator.'
        img_src='./assets/images/calculator.png'></Project>
    </Container>
  );
}

export default Projects;
