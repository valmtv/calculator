import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Controls } from '../controls';

import { Input } from '../input';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: black;
`;

const App = () => {
  const [{ whole }, setWhole] = useState({ whole: '0' });
  const [{ isWhole }, setIsWhole] = useState({ isWhole: true });
  const [{ fract }, setFract] = useState({ fract: '0' });

  const handleInput = inpt => isWhole
    ? setWhole({ whole: parseInt(whole + inpt) })
    : setFract({ fract: parseInt(fract + inpt) });

  const clearInput = () => {
    setWhole({ whole: '0' })
    setFract({ fract: '0'});
  };

  const handleComma = () => setIsWhole({
    isWhole: !isWhole,
  });

  const handleOprClick = (e) => {
    switch (e.target.value) {
      case 'Del' : clearInput(); break;
      case ',' : handleComma(); break;
    };
  };

  return <Main>
    <Input value={whole + ',' + fract} />
    <Controls
      onInput={handleInput}
      onOprClick={handleOprClick}
    />
  </Main>;
};
export default App;
