import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Num, Equal,
} from '../button';

import {
  Pannel
} from '../pannel';

import {
  Operation
} from '../operation';


const Body= styled.main`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 70px 0 0 70px;
  padding: 3px;
  display: grid;
  grid-template-areas: "pannel    pannel    pannel    pannel"
                       "operation operation operation operation"
                       "num7      num8      num9      operation"
                       "num6      num5      num4      operation"
                       "num3      num2      num1      equal"
                       "percent   num0      dot       equal";
`;

const App = () => (
  <Body>
    {[0,1,2,3,4,5,6,7,8,9].map(n => <Num value={n} key={n} />)}
    <Operation />
    <Pannel />
    <Equal />
  </Body>
);
export default App;
