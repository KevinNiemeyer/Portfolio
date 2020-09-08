import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import './App.css';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: auto;
`;

//trying to get the logo to spin

function Logo(props) {
  const w = props.w;
  const h = props.h;
  const x = 5 + props.x;
  const y = 105 + props.y;
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <svg
          width='250'
          height='250'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <line
            style={{ animation: 'color_change 3s ease-in alternate infinite' }}
            x1={x}
            x2={x}
            y1={y}
            y2={y + h}
            stroke='cornflowerblue'
            strokeWidth='5'>
            <style>{`
            zIndex:'-1',
            @keyframes color_change {
              from { stroke: cornflowerblue; }
              to { stroke: red; }
            }
        `}</style>
          </line>
          <line
            x1={x}
            x2={x}
            y1={y + h / 2}
            y2={y + h}
            stroke='red'
            strokeWidth='5'></line>

          <line
            style={{
              animation: 'color_change 3s 3s ease-in alternate infinite',
            }}
            x1={x + w}
            x2={x + w}
            y1={y}
            y2={y + h}
            stroke='red'
            strokeWidth='5'>
            <style>{`
            @keyframes color_change {
              0% { stroke: cornflowerblue; }
              100% { stroke: red; }
            }
      `}</style>
          </line>
          <line
            style={{
              animation: 'color_change 3s ease-in alternate infinite',
            }}
            x1={x}
            x2={x + w}
            y1={y + h / 2}
            y2={y}
            stroke='cornflowerblue'
            strokeWidth='5'>
            {' '}
            <style>{`
            @keyframes color_change {
              from { stroke: cornflowerblue; }
              to { stroke: red; }
            }
        `}</style>
          </line>
          <line
            x1={x}
            x2={x + w}
            y1={y + h / 2}
            y2={y + h}
            stroke='red'
            strokeWidth='5'>
            {' '}
          </line>
          <circle
            cx={x}
            cy={y}
            r='3'
            stroke='red'
            fill='transparent'
            strokeWidth='3'
          />
          <circle
            cx={x}
            cy={y + h / 2}
            r='3'
            stroke='red'
            fill='transparent'
            strokeWidth='3'
          />
          <circle
            cx={x}
            cy={y + h}
            r='3'
            stroke='red'
            fill='transparent'
            strokeWidth='3'
          />
          <circle
            cx={x + w}
            cy={y}
            r='3'
            stroke='red'
            fill='transparent'
            strokeWidth='3'
          />
          <circle
            cx={x + w}
            cy={y + h}
            r='3'
            stroke='red'
            fill='transparent'
            strokeWidth='3'
          />
        </svg>
      </Link>
    </Container>
  );
}

export default Logo;
