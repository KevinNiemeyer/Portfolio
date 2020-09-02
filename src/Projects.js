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
        description='Instagram clone that consumes the Unsplash API to display and search photos on Unsplash. Created with React.js using React Router, Hooks Styled Components, and Infinite Scroll modules.'
        img_src='./assets/images/photogram-preview.png'></Project>
      <Project
        project_name='GitHub Profile App'
        git_url='https://github.com/KevinNiemeyer/github-app'
        live_url='https://kevinniemeyer.github.io/github-app/'
        description='App that uses Axios to retrieve API profile data on GitHub for two profiles and compare their stats'
        img_src='./assets/images/github-app-preview.png'></Project>
      <Project
        project_name='Link Harvester'
        git_url='https://github.com/KevinNiemeyer/link-harvester.git'
        live_url='https://kevinniemeyer.github.io/link-harvester/'
        description="Harvests all links from a page's HTML code that you copy/paste in or upload from a file. Could be extended to harvest other useful information, such as metadata, tags, etc...  Utilizes my jQuery skills"
        img_src='./assets/images/link-harvester.png'></Project>
    </Container>
  );
}

export default Projects;
