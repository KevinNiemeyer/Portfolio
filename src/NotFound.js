import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
`;
function NotFound(props) {
  return (
    <Container>
      <h1>{props.location.pathname} Page Not Found </h1>
    </Container>
  );
}

export default NotFound;
