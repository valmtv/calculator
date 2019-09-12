import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const TopOperationStyled = styled.div`
  color: blue;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  
`; 

export const TopOperation = () => (
  <TopOperationStyled>
    <div>C</div>
    <div>/</div>
    <div>*</div>
  </TopOperationStyled>
);
