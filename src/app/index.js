import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Num, Percent, Dot, Divide, Deleteall, Multiply, Plus, Minus, Equal
} from '../button';

import {
  Pannel
} from '../pannel';

const Body= styled.main`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 70px 0 0 70px;
  padding: 3px;
  display: grid;
  grid-template-areas: "pannel    pannel pannel   pannel"
                       "deleteall divide multiply multiply" 
                       "num7      num8   num9     minus"
                       "num6      num5   num4     plus"
                       "num3      num2   num1     equal"
                       "percent   num0   dot      equal";
`;

const App = () => (
  <Body>
    {[0,1,2,3,4,5,6,7,8,9].map(n => <Num value={n} key={n} />)}
    <Percent />
    <Pannel />
    <Dot />
    <Divide />
    <Deleteall />
    <Multiply />
    <Plus />
    <Equal />
    <Minus />
  </Body>
);
export default App;
