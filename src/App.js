// App.jsx

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Footer from './Footer';
import NotFound from './NotFound';

export const DarkModeContext = React.createContext();

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.3s;
  max-height: 100vh;
`;

function App() {
  const [isDarkMode, setIsDark] = useState(false);

  const toggleView = () => {
    // toggle isDark:
    setIsDark(!isDarkMode);

    localStorage.setItem('darkModeSetting', JSON.stringify(isDarkMode));
  };

  useEffect(() => {
    const darkModeSetting = localStorage.getItem('darkModeSetting');
    if (darkModeSetting) setIsDark(JSON.parse(darkModeSetting));
  }, []);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleView: toggleView,
      }}>
      <Router>
        <Container>
          <Nav toggleview={toggleView} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/portfolio' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route path='/*' component={NotFound} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;

//belongs in package.json
//"homepage": " https://KevinNiemeyer.github.io/portfolio/",
