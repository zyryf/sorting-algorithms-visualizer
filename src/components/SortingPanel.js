import React, { useContext } from 'react';
import styled from 'styled-components';

import delay from './sorting_functions/delay';
import { AppContext } from '../App';
import { SortButton } from './SortButton';
import { COLORS } from '../ThemeConstants';

const Wrapper = styled.div`
  width: 100%;
`;
const SortingPanel = () => {
  const {
    insertionSortData,
    setInsertionSortData,
    selectionSortData,
    setSelectionSortData,
  } = useContext(AppContext);

  const { isSorting, setSorting } = useContext(AppContext);

  const setColor = (data, color, index) => {
    const colored = { value: data[index].value, color: color };
    data[index] = colored;
  };

  const insertionSort = async () => {
    for (let i = 1; i < insertionSortData.length; i++) {
      let j = i - 1;
      let current = { value: insertionSortData[i].value, color: 'lightgreen' };

      for (j; j > -1 && current.value < insertionSortData[j].value; j--) {
        await delay(50);
        insertionSortData[j + 1] = insertionSortData[j];
        setColor(insertionSortData, 'red', j);
        setColor(insertionSortData, 'lightgreen', j + 1);
        setInsertionSortData([...insertionSortData]);
      }
      await delay(50);
      insertionSortData[j + 1] = current;
      setInsertionSortData([...insertionSortData]);
    }
    setSorting(false);
  };

  const selectionSort = async () => {
    const swap = (array, firstIndex, secondIndex) => {
      let temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    };
    const indexOfMinimum = async (array, startIndex) => {
      let minValue = array[startIndex].value;
      let minIndex = startIndex;

      for (let i = minIndex + 1; i < array.length; i++) {
        await delay(50);

        setColor(selectionSortData, 'red', i);
        setColor(selectionSortData, COLORS.light_blue, i - 1);
        setSelectionSortData([...selectionSortData]);
        if (array[i].value < minValue) {
          minIndex = i;
          minValue = array[i].value;
        }
      }
      setColor(
        selectionSortData,
        COLORS.light_blue,
        selectionSortData.length - 1
      );
      setSelectionSortData([...selectionSortData]);

      return minIndex;
    };

    let minIndex = 0;
    for (let i = 0; i < selectionSortData.length; i++) {
      await delay(50);
      minIndex = await indexOfMinimum(selectionSortData, i);
      swap(selectionSortData, i, minIndex);
      setColor(selectionSortData, 'lightgreen', i);
      setSelectionSortData([...selectionSortData]);
    }
  };

  return (
    <Wrapper>
      <SortButton
        disabled={isSorting}
        onClick={() => {
          insertionSort();
          selectionSort();
          setSorting(true);
        }}
      >
        Start sorting
      </SortButton>
    </Wrapper>
  );
};

export default SortingPanel;
