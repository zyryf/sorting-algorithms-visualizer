import React from 'react';
import styled from 'styled-components';

import InsertionSort from './sorting_components/InsertionSort';

const SortingPanelWrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 2rem; ;
`;

const SortingPanel = () => {
  return (
    <SortingPanelWrapper>
      <InsertionSort />
    </SortingPanelWrapper>
  );
};

export default SortingPanel;
