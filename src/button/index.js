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
  `;

  return (
    <N9>{value}</N9>
  ); 
};

const Perc = styled.div`
  color: gray;
  background-color: lightyellow;
  grid-area: percent;
`;

export const Percent = () => (
  <Perc>%</Perc>
); 

const Point = styled.div`
  color: gray;
  background-color: lightyellow;
  grid-area: dot;
`;

export const Dot = () => (
  <Point>.</Point>
);
