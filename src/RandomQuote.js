import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './random-quote-styles.css';
import './App.css';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  font-size: calc(0.05 * 33vw);
`;

const RandomQuote = (props) => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const getData = () => {
    const url =
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    axios.get(url).then((response) => {
      setQuote(response.data.quoteText);
      setAuthor(response.data.quoteAuthor);
    });
  };
  useEffect(() => {
    try {
      getData();
    } catch (e) {}
  }, []);

  return (
    <Container>
      <blockquote>
        {quote}
        <footer>
          <cite>{author}</cite>
        </footer>
      </blockquote>
    </Container>
  );
};

export default RandomQuote;
