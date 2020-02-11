import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Operation = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;  
  display: flex;
  justify-content: center;
`;

const Equal1 = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;  
  display: flex;
  justify-content: center;
`;

export const Opr1 = () => (
  <Operation>%</Operation>
);

export const Opr2 = () => (

  <Operation>,</Operation>
);

export const Opr3 = () => (
  <Operation>+</Operation>
);

export const Opr4 = () => (
  <Operation>-</Operation>
);

export const Opr5 = () => (
  <Operation>del</Operation>
);

export const Opr6 = () => (
  <Operation>X</Operation>
);

export const Opr7 = () => (
  <Operation>/</Operation>
);

export const Opr8 = () => (
  <Operation>C</Operation>
);

export const Equal = () => (
  <Equal1>=</Equal1>
);

