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

export const Controls = () => (
  <Div>
    <Opr value='/' name='divide'/>
    <Opr value='+' name='plus'/>
    <Opr value='=' name='equal'/>
    <Opr value='-' name='minus'/>
    <Opr value='%' name='percent'/>
    <Opr value='Del' name='delete'/>
    <Opr value='X' name='multi'/>
    <Opr value='C' name='cancel'/>
    <Opr value=',' name='point'/>
    <Num name='0' />
    <Num name='1' />
    <Num name='2' />
    <Num name='3' />
    <Num name='4' />
    <Num name='5' />
    <Num name='6' />
    <Num name='7' />
    <Num name='8' />
    <Num name='9' />
  </Div>
);
