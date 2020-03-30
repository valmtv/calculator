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
  const [{ input }, setInput] = useState({ input: '0' });

  const handleInput = inpt => setInput({
    input: parseInt(input + inpt),
  });

  return <Main>
    <Input value={input} />
    <Controls onInput={handleInput} />
  </Main>;
};
export default App;
