import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Card from './components/Card';
import { COLORS, FONT_SIZES } from './ThemeConstants';

const Title = styled.h1`
  font-size: ${(props) => props.theme.FONT_SIZES.lg};
  margin: 4rem;
`;

const Colored = styled.span`
  color: ${(props) => props.theme.COLORS.blue};
`;

const GenerateData = styled.button`
  box-shadow: 0 12px 32px -12px rgba(0, 84, 222, 0.6);
  background-color: ${(props) => props.theme.COLORS.blue};
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 40px;
  color: white;
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  cursor: pointer;
  margin: 5rem;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.COLORS.dark_blue};
  }
`;

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    setData(initializeData(50));
  }, []);

  const initializeData = (amount) => {
    const array = [];
    for (let i = 0; i < amount; i++) {
      array.push({ value: 0, color: COLORS.light_blue });
    }
    return array;
  };

  const generateRandomData = (amount) => {
    for (let i = 0; i < amount; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      data[i].value = randomNumber;
    }
    setData([...data]);
  };

  return (
    <AppContext.Provider value={{ data, setData }}>
      <ThemeProvider theme={{ COLORS, FONT_SIZES }}>
        <div className="App">
          <Title>
            Sorting algorithms <Colored>visualizer</Colored>
          </Title>
          <Card />
          <GenerateData
            onClick={() => {
              generateRandomData(50);
            }}
          >
            Generate Data
          </GenerateData>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
