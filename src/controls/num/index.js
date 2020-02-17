import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;  
  display: flex;
  justify-content: center;
`;

export const Num = ({ name }) => (
  <Button>{name}</Button>
);
