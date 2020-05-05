import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Operation = styled.button`
  background-color: ${ pr => pr.color };
  color: black;
  font-size: 50px;  
  grid-area: ${ pr => pr.area };
  display: flex;
  justify-content: center;
`;

export const Opr = ({
  value,
  name,
  onOprClick,
  color,
}) => {
  console.log('Opr', name, color);
  return (
    <Operation
      area={name}
      value={value}
      onClick={onOprClick}
      color={color}
    >
      {value}
    </Operation>
  );
};
