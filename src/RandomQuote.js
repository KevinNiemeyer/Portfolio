import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import './random-quote-styles.css';
import { DarkModeContext } from './App';
import './App.css';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  font-size: calc(0.05 * 33vw);
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
    var config = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    const url =
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    axios.get(url, config).then((response) => {
      if (response.data.quoteText) {
        setQuote(response.data.quoteText);
      } else
        setQuote(
          'Good actions give strength to ourselves and inspire good actions in others.'
        );
      if (response.data.quoteAuthor) {
        setAuthor(response.data.quoteAuthor);
      } else setAuthor('-Plato');
    });
  };
  useEffect(() => {
    try {
      getData();
    } catch (e) {}
    const interval = setInterval(() => {
      try {
        getData();
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
              {quote}
              <Footer>
                <Cite>{author}</Cite>
              </Footer>
            </Blockquote>
          </Container>
        );
      }}
    </DarkModeContext.Consumer>
  );
};

export default RandomQuote;
