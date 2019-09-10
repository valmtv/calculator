import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Num = ({value}) => {
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
  
  const N9 = styled.div`
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
    <N9>{value}</N9>
  ); 
};

const Perc = styled.div`
  color: gray;
  background-color: lightyellow;
  grid-area: percent; 
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Percent = () => (
  <Perc>%</Perc>
); 

const Point = styled.div`
  color: gray;
  background-color: lightyellow;
  grid-area: dot;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = () => (
  <Point>.</Point>
);

const Divide1 = styled.div` 
  color: blue;
  background-color: lightgrey;
  grid-area: divide;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divide = () => (
  <Divide1>/</Divide1>
);

const DeleteAll = styled.div` 
  color: blue;
  background-color: lightgrey;
  grid-area: deleteall;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Deleteall = () => (
  <DeleteAll>C</DeleteAll>
);

const Multy = styled.div` 
  color: blue;
  background-color: lightgrey;
  grid-area: multiply;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Multiply = () => (
  <Multy>X</Multy>
);

const Plus1 = styled.div` 
  color: blue;
  background-color: lightgrey;
  grid-area: plus;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Plus = () => (
  <Plus1>+</Plus1>
);

const Minus1 = styled.div` 
  color: blue;
  background-color: lightgrey;
  grid-area: minus;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Minus = () => (
  <Minus1>-</Minus1>
);

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
