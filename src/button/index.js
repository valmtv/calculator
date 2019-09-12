import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Num = () => {
  const conf = {
    "0": "num0",
    "1": "num1",
    "2": "num2",
    "3": "num3",
    "4": "num4",
    "5": "num5",
    "6": "num6",
    "7": "num7",
    "8": "num8",
    "9": "num9",
  };
  
  const N = styled.div`
    color: gray;
    background-color: lightyellow;
    grid-area: ${conf[value]};
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <N>{value}</N>
  ); 
};

const Equal1 = styled.div` 
  color: white;
  background-color: blue;
  grid-area: equal;
  height: 200px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Equal = () => (
  <Equal1>=</Equal1>
);
