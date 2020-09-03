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

const Img = styled.img`
  transition: all 0.5s linear;
  width: 400px;
  border: solid lightgrey 1px;
  &:hover {
    transform: scale(1.05);
  }
`;

function Project(props) {
  return (
    <Container>
      <UL>
        <LI>
          <h2>
            Project:{' '}
            <span style={{ color: 'orange' }}>{props.project_name}</span>
          </h2>
          <h3>
            Description:{' '}
            <span style={{ color: 'cornflowerblue' }}>{props.description}</span>
          </h3>
          if(props.git_url) {<h3>
            GitHub Repository:&nbsp;
            <a href={props.git_url}>{props.git_url}</a>
          </h3> } 
          else { <h3>CodePen:&nbsp;
            <a href={props.cp_url}>{props.cp_url}</a>
          }
          <a href={props.live_url}>
            <h3>Live Demo:</h3>
            <Img src={require(`${props.img_src}`)} alt={props.project_name} />
          </a>
        </LI>
      </UL>
    </Container>
  );
}

export default Project;
