import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeftOperationStyled = styled.div`
  color: blue;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`; 

export const LeftOperation = () => (
  <LeftOperationStyled>
    <div>{'<'}</div>
    <div>+</div>
    <div>-</div>
  </LeftOperationStyled>
);
