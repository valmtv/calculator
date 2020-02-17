import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  background-color: white;
  color: black;
  font-size: 50px;  
  display: flex;
  justify-content: flex-end;
`;

export const Input = () => (
  <Div>2+45=47</Div>
);

