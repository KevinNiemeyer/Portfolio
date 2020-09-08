import React from 'react';
import styled from 'styled-components';
import './App.css';
import { DarkModeContext } from './App';
const Container = styled.div``;

const Button = styled.button`
  width: 50px;
  height: 30px;
`;

function DarkModeButton(props) {
  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <Button id='darkMode' onClick={value.toggleView} />
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
}

export default DarkModeButton;
