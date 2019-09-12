import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  TopOperation, 
} from './TopOperation';

import {
  LeftOperation, 
} from './LeftOperation';



const OperationStyled = styled.div`
  color: gray;
  background-color: lightblue;
  grid-area: operation; 
  display: flex;
  justify-content: center;
  align-items: center;
  
`; 

export const Operation = () => (
  <OperationStyled>
    <TopOperation />
    <LeftOperation />
  </OperationStyled>
);
