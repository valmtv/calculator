import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Controls } from '../controls';

import { Input } from '../input';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: black;
`;

const App = () => (
  <Main>
    <Input />
    <Controls />
  </Main>
);
export default App;
