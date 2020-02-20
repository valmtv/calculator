import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Operation = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;  
  grid-area: ${ props => props.name };
  display: flex;
  justify-content: center;
`;

export const Opr = ({value, name}) => (
  <Operation name={name}>
    {value}
  </Operation>
);
