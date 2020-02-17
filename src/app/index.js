import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Controls } from '../controls';

import { Pannel } from '../pannel';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: black;
`;

const App = () => (
  <Main>
    <Pannel />
    <Controls />
  </Main>
);
export default App;
