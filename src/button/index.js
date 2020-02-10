import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Opr1, Opr2, Opr3, Opr4, Opr5,
  Opr6, Opr7, Opr8, Equal
} from './operation'

import {
  Num1, Num2, Num3, Num4, Num5,
  Num6, Num7, Num8, Num9, Num0
} from './num';

const button = styled.div`
  display: flex;
  justify-content: center;

`;
const Div = styled.div`
  background-color: black;
  display: grid;
  grid-template-areas: "Opr8 Opr7 Opr6 Opr5";
                       "Num9 Num8 Num7 Opr4";
                       "Num6 Num5 Num4 Opr3";
                       "Num3 Num2 Num1 Equal";
                       "Opr1 Num0 Opr2 Equal";
`;

export const Button = () => (
  <button>
    <Div>
     <Opr8/>
     <Opr7/>
     <Opr6/>
     <Opr5/>
     <Num9/>
     <Num8/>
     <Num7/>
     <Opr4/>
     <Num6/>
     <Num5/>
     <Num4/>
     <Opr3/>
     <Num3/>
     <Num2/>
     <Num1/>
     <Equal/>
     <Opr1/>
     <Num0/>
     <Opr2/>
    </Div>
  </button>
);
