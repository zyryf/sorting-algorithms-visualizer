import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../App';
import Bar from './Bar';
import StartComponent from './StartComponent';
import SortingPanel from './SortingPanel';
const GridWrapper = styled.div`
  width: 60vw;
  padding: 2rem;
  min-height: 50vh;
  border-radius: 20px;
  box-shadow: -24px 32px 85px -13px rgba(0, 0, 0, 0.24);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & h2 {
    width: 100%;
    text-align: center;
    font-weight: light;
  }
  @media (max-width: 1400px) {
    & {
      width: 70vw;
    }
  }
  @media (max-width: 1200px) {
    & {
      width: 80vw;
    }
  }
  @media (max-width: 992px) {
    & {
      width: 90vw;
    }
  }
`;
const Bars = styled.ul`
  padding: 1rem 0;
  list-style: none;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const Card = () => {
  const { insertionSortData, bubbleSortData, selectionSortData } = useContext(
    AppContext
  );
  return (
    <GridWrapper>
      {insertionSortData !== null ? (
        <>
          <h2>Insertion Sort</h2>
          <Bars>
            {insertionSortData.map((element, index) => (
              <Bar
                height={`${element.value}%`}
                color={`${element.color}`}
                key={index}
              ></Bar>
            ))}
          </Bars>
          <h2>Selection Sort</h2>
          <Bars>
            {selectionSortData.map((element, index) => (
              <Bar
                height={`${element.value}%`}
                color={`${element.color}`}
                key={index}
              ></Bar>
            ))}
          </Bars>
          <h2>Bubble Sort </h2>
          <Bars>
            {bubbleSortData.map((element, index) => (
              <Bar
                height={`${element.value}%`}
                color={`${element.color}`}
                key={index}
              ></Bar>
            ))}
          </Bars>

          <SortingPanel />
        </>
      ) : (
        <StartComponent />
      )}
    </GridWrapper>
  );
};

export default Card;
