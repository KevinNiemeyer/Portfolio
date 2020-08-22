import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
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
  padding: 20px;
  text-decoration: none;
`;
const Title = styled.h3``;
function Project(props) {
  console.log(props.repo.name);
  //https://kevinniemeyer.github.io/HandlebarsPhotoAlbum/
  const apiKey = `fcdb89fa56c1147e`;
  const liveDemoURL = `https://kevinniemeyer.github.io/${props.repo.name}/`;
  const liveImgSrc = `http://api.page2images.com/directlink?p2i_url=${liveDemoURL}&p2i_key=${apiKey}& p2i_size=150x150`;
  console.log(props.repo.pic);
  return (
    <Container>
      <UL>
        <LI>
          <h3>
            Project: <span style={{ color: 'orange' }}>{props.repo.name}</span>
          </h3>
          <h3>
            Description:{' '}
            <span style={{ color: 'orange' }}>{props.repo.description}</span>
          </h3>
          <h3>
            GitHub Repository:&nbsp;
            <a href={props.repo.html_url}>{props.repo.html_url}</a>
          </h3>
          <h3>
            <a href={liveDemoURL}>Live Demo</a>
          </h3>
          <img src={liveImgSrc} alt={props.repo.name} />
        </LI>
      </UL>
    </Container>
  );
}

export default Project;
