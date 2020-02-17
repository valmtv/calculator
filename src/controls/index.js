import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Opr1, Opr2, Opr3, Opr4, Opr5,
  Opr6, Opr7, Opr8, Equal
} from './operation'

import { Num } from './num';

const Div = styled.div`
  background-color: black;
  display: grid;
  grid-template-areas: 'Opr8 Opr7 Opr6 Opr5';
                       'Num9 Num8 Num7 Opr4';
                       'Num6 Num5 Num4 Opr3';
                       'Num3 Num2 Num1 Equal';
                       'Opr1 Num0 Opr2 Equal';
`;

export const Controls = () => (
  <Div>
    <Opr8/>
    <Opr7/>
    <Opr6/>
    <Opr5/>
    <Opr4/>
    <Opr3/>
    <Equal/>
    <Opr1/>
    <Opr2/>
    <Num name='0' />
    <Num name='1' />
    <Num name='2' />
    <Num name='3' />
    <Num name='4' />
    <Num name='5' />
    <Num name='6' />
    <Num name='7' />
    <Num name='8' />
    <Num name='9' />
  </Div>
);
