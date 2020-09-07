import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 40%;
  height: 100%;
`;

const A = styled.a`
  box-sizing: border-box;
  font-size: 25px;
  background-color: #252525;
  display: flex;
  width: 50px;
  height: 50px;

  margin: 0 15px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(7, 119, 232, 0.8);
  box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.8);
  transition: all 0.1 s ease;
  &:hover {
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8),
      inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
  &:active {
    color: #00a1f1;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 0.8);
    text-shadow: 0 0 5px #00a1f1, 0 0 30px #00a1f1;
  }
`;

function SocialIcons(props) {
  return (
    <Container>
      <h4 style={{ fontSize: '18px', color: 'cornflowerblue' }}>
        Follow me on social media:
      </h4>
      <Wrapper>
        <A href='https://www.facebook.com/kevin.niemeyer.1004'>
          <i className='fab fa-facebook'></i>
        </A>
        <A href='https://twitter.com/kevinniemeyer2'>
          <i className='fab fa-twitter'></i>
        </A>
        <A href='https://instagram.com/kevthedev2020'>
          <i className='fab fa-instagram'></i>
        </A>
      </Wrapper>
    </Container>
  );
}

export default SocialIcons;
