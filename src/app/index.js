import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Num9, Num8, Num7, Num6, Num5, Num4, Num3,
Num2, Num1, Num0, Percent, Point
} from '../button';

const Body= styled.body`
  display: grid;
  grid-template-areas: "num7 num8 num9"
                       "num6 num5 num4"
                       "num3 num2 num1"
                       "percent num0 point";
`;

const App = () => (
  <Body>
    <Num9 />
    <Num8 />
    <Num7 />
    <Num6 />
    <Num5 />
    <Num4 />
    <Num3 />
    <Num2 />
    <Num1 />
    <Num0 />
    <Percent />
    <Point />
  </Body>
);
export default App;
