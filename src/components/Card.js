import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../App';
import Bar from './Bar';
import StartComponent from './StartComponent';
import SortingPanel from './SortingPanel';
const GridWrapper = styled.div`
  min-width: 60vw;
  padding: 2rem;
  height: 50vh;
  border-radius: 20px;
  box-shadow: -24px 32px 85px -13px rgba(0, 0, 0, 0.24);
  position: relative;
  display: flex;
`;
const Bars = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: flex-end;
  width: 75%;
`;

const Card = () => {
  const { data } = useContext(AppContext);
  return (
    <GridWrapper>
      {data !== null ? (
        <>
          <Bars>
            {data.map((element, index) => (
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
