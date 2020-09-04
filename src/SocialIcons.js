import React from 'react';
import styled from 'styled-components';
import { SiTwitter, SiFacebook, SiInstagram } from 'react-icons/si';
import './App.css';

const Container = styled.div`
  font-size: 30px;
  overflow: hidden;
  margin-left: 100px;
  width: 100%;
`;

const FBIcon = styled(SiFacebook)`
  color: rgb(59, 89, 152);
  font-size: 75%;
  margin: 0 20px 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`;

const TwitterIcon = styled(SiTwitter)`
  color: rgb(29, 161, 242);
  font-size: 75%;
  margin: 0 20px 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`;

const InstagramIcon = styled(SiInstagram)`
  font-size: 50%;
  padding: 5px;
  border-radius: 10px;
  background: linear-gradient(45deg, yellow, red, purple);
  margin: 0 20px 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`;

function SocialIcons(props) {
  return (
    <Container>
      <a href='#'>
        <FBIcon />
      </a>
      <a href='https://twitter.com/kevinniemeyer2'>
        <TwitterIcon />
      </a>
      <a href='https://instagram.com/kevthedev2020'>
        <InstagramIcon />
      </a>
    </Container>
  );
}

export default SocialIcons;
