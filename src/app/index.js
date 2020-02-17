import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Button
} from '../button';

import {
  Pannel
} from '../pannel';

const Body= styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: black;
`;

const App = () => (
  <Body>
    <Pannel/>
    <Button/>
  </Body>
);
export default App;
