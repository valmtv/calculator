import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  grid-template-areas: "Num9 Num8 Num7";
                       "Num6 Num5 Num4";
                       "Num3 Num2 Num1";
                       "Num0 Num0 Num0";
`;

export const Button = () => (
  <button>
    <Div>
     <Num9/>
     <Num8/>
     <Num7/>
     <Num6/>
     <Num5/>
     <Num4/>
     <Num3/>
     <Num2/>
     <Num1/>
     <Num0/>
    </Div>
  </button>
);
