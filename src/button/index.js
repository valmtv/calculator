import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Num1
} from './num';

const button = styled.div`
  display: flex;
  justify-content: center;

`;
const Div = styled.div`
  background-color: black;
`;

export const Button = () => (
  <button>
    <Div>
     <Num1/>
    </Div>
  </button>
);
