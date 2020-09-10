import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import './random-quote-styles.css';
import { DarkModeContext } from './App';
import './App.css';
import axios from 'axios';

const Container = styled.div`
  position: relative;
  width: 100%;
  top: 20%;
  @media only screen and (min-width: 1000px) {
    font-size: calc(0.016 * 100vw);
  }
  @media only screen and (min-device-width: 768px) and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    font-size: calc(0.025 * 100vw);
    padding: 25px calc(0.05 * 100vw);
  }
`;

const Blockquote = styled.blockquote`
  ${(props) =>
    props.isdarkmode
      ? css`
          color: #cccccc;
        `
      : css`
          color: #151515;
        `}

  font-family: Georgia, serif;
  position: relative;
  margin: 0.3em;
  padding: 0.5em 2em 0.5em 3em;
  &:before {
    color: green;
    font-family: Georgia, serif;
    position: absolute;
    font-size: calc(0.3 * 33vw);
    line-height: 1;
    top: 0;
    left: 0;
    content: '\201C';
  }
  &:after {
    color: green;
    font-family: Georgia, serif;
    position: absolute;
    float: right;
    font-size: calc(0.3 * 33vw);
    line-height: 1;
    right: 0;
    bottom: -0.5em;
    content: '\201D';
  }
`;

const Footer = styled.footer`
  margin-top: 1.5em;
  padding: 0 2em 0 0;
  text-align: right;
`;

const Cite = styled.cite`
  content: '\2013';
`;

const RandomQuote = (props) => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const getData = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url =
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    axios
      .get(proxyurl + url)
      .then((response) => {
        if (response.data.quoteText !== undefined) {
          setQuote(response.data.quoteText);
          if (response.data.quoteAuthor === '') {
            setAuthor('Unknown');
          } else {
            setAuthor(response.data.quoteAuthor);
          }
        } else {
          setQuote(
            'Good actions give strength to ourselves and inspire good actions in others.'
          );
          setAuthor('Plato');
        }
      })
      .catch(() =>
        console.log(`Can't access ${url} response. Blocked by Browser?`)
      );
  };
  useEffect(() => {
    try {
      getData();
    } catch (e) {}
    const interval = setInterval(() => {
      try {
        //getData();
      } catch (e) {}
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DarkModeContext.Consumer>
      {(value) => {
        return (
          <Container>
            <Blockquote isdarkmode={value.isDarkMode}>
              {quote ||
                'Good actions give strength to ourselves and inspire good actions in others.'}
              <Footer>
                <Cite>{author || 'Plato'}</Cite>
              </Footer>
            </Blockquote>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
};

export default RandomQuote;
