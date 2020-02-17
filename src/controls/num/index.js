import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  grid-area: ${ props => 'Num' + props.name };
  font-size: 50px;  
  display: flex;
  justify-content: center;
`;

export const Num = ({ name }) => (
  <Button name={name} >{name}</Button>
);
