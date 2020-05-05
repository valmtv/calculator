import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Controls } from '../controls';

import { Input, OprInput, UpperInput } from '../input';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: black;
`;

const App = () => {
  const [{ whole }, setWhole] = useState({ whole: '0' });
  const [{ fract }, setFract] = useState({ fract: '0' });
  const [{ isWhole }, setIsWhole] = useState({ isWhole: true });
  const [{ oprName }, setOprName] = useState({ oprName: null});
  const [{ upperInput}, setUpperInput] = useState({ upperInpt: null });

  const handleInput = inpt => isWhole
    ? setWhole({ whole: parseInt(whole + inpt) })
    : setFract({ fract: parseInt(fract + inpt) });

  const clearInput = () => {
    setWhole({ whole: '0' });
    setFract({ fract: '0' });
  };

  const handleComma = () => setIsWhole({
    isWhole: !isWhole,
  });


  const handlePercent = () => {
    console.log(number)
  };

//  const n = whole.length
//  const handleC = 
//  const handleC = () => console.log(whole.slice(0, n-1));

  const handleMulti = () => {
    setOprName({ oprName: '*' });
    setUpperInput({ upperInput: whole + ',' + fract });
    clearInput();
  };
  

  const handleOprClick = (e) => {
    switch (e.target.value) {
      case 'Del' : clearInput(); break;
      case ',' : handleComma(); break;
      case '%' : handlePercent(); break;
      case 'C' : handleC(); break;
      case 'X' : handleMulti(); break;
      case '=' : handleEqual(); break;
    };
  };

  return <Main>
    <UpperInput value={upperInput}/>
    <OprInput value={oprName}/>
    <Input value={whole + ',' + fract} />
    <Controls
      onInput={handleInput}
      onOprClick={handleOprClick}
      commaIsActive={!isWhole}
    />
  </Main>;
};
export default App;
