import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Operation = styled.div`
  background-color: white;
  color: black;
  font-size: 50px;  
  padding-right: 50px;
`;

const Equal1 = styled.div`
  background-color: white;
  color: black;
  font-size: 50px;  
  padding-right: 50px;

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

