import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Operation = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;  
  grid-area: ${ props => props.area };
  display: flex;
  justify-content: center;
`;

export const Opr = ({value, name}) => { 
  const onClick = e =>
    console.log('somebody clicked on Operation component', e.target.value)
  return(
    <Operation
      area={name}
      value={value}
      onClick={onClick}
    >
      {value}
    </Operation>
  );
};
