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
  justify-content: center;

`;
const Div = styled.div`
  padding: 5px;
  background-color: black;
`;

const App = () => (
  <Body>
    <Div>
     <Pannel/>
     <Button/>
    </Div>
  </Body>
);
export default App;
