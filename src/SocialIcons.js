import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-left: 100px;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 40%;
  height: 100%;
`;

const A = styled.a`
  box-sizing: border-box;
  font-size: 25px;
  background-color: #d6cbd3;
  display: flex;
  width: 40px;
  height: 40px;

  margin: 0 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(7, 119, 232);
  box-shadow: 0px 2px 2px rgb(7, 119, 232, 1),
    0px 3px 2px rgba(255, 255, 255, 0.7);
  transition: all 0.1 s ease;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 0px 2px 0px rgb(7, 119, 232, 1), 0px 3px 6px rgba(0, 0, 0, 0.9),
      inset 0px 1px 3px rgba(255, 255, 255, 0.7);
    opacity: 1;
    position: relative;
    top: 1px;
  }
`;

function SocialIcons(props) {
  return (
    <Container>
      <h4 style={{ paddingBottom: '10px' }}>Follow me on social media:</h4>
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
