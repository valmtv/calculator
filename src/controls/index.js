import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Opr } from './operation'

import { Num } from './num';

const Div = styled.div`
  background-color: black;
  display: grid;
  grid-template-areas: 'cancel  divide multi delete'
                       'Num9    Num8   Num7  minus'
                       'Num6    Num5   Num4  plus'
                       'Num3    Num2   Num1  equal'
                       'percent Num0   point equal';
`;

export const Controls = ({ onInput, onOprClick }) => <Div>
  <Opr value='/' name='divide' onOprClick={onOprClick} />
  <Opr value='+' name='plus' onOprClick={onOprClick} />
  <Opr value='=' name='equal' onOprClick={onOprClick} />
  <Opr value='-' name='minus' onOprClick={onOprClick} />
  <Opr value='%' name='percent' onOprClick={onOprClick} /> 
  <Opr value='Del' name='delete' onOprClick={onOprClick} />
  <Opr value='X' name='multi' onOprClick={onOprClick} />
  <Opr value='C' name='cancel' onOprClick={onOprClick} />
  <Opr value=',' name='point' onOprClick={onOprClick} />
  <Num name='0' onNumClick={onInput} />
  <Num name='1' onNumClick={onInput} />
  <Num name='2' onNumClick={onInput} />
  <Num name='3' onNumClick={onInput} />
  <Num name='4' onNumClick={onInput} />
  <Num name='5' onNumClick={onInput} />
  <Num name='6' onNumClick={onInput} />
  <Num name='7' onNumClick={onInput} />
  <Num name='8' onNumClick={onInput} />
  <Num name='9' onNumClick={onInput} />
</Div>;
