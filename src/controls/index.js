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

export const Controls = ({ onInput, clearInput }) => <Div>
  <Opr value='/' name='divide'/>
  <Opr value='+' name='plus'/>
  <Opr value='=' name='equal'/>
  <Opr value='-' name='minus'/>
  <Opr value='%' name='percent'/> 
  <Opr value='Del' name='delete' onOprClick={clearInput}/>
  <Opr value='X' name='multi'/>
  <Opr value='C' name='cancel'/>
  <Opr value=',' name='point'/>
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
