import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Num, Percent, Dot,
} from '../button';

const Body= styled.body`
  display: grid;
  grid-template-areas: "num7 num8 num9"
                       "num6 num5 num4"
                       "num3 num2 num1"
                       "percent num0 dot";
`;

const App = () => (
  <Body>
    {[0,1,2,3,4,5,6,7,8,9].map(n => <Num value={n} key={n} />)}
    <Percent />
    <Dot />
  </Body>
);
export default App;
