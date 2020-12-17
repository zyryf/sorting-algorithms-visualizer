import React, { useContext } from 'react';
import { AppContext } from '../../App';

import { SortButton } from './SortButton';

const InsertionSort = () => {
  const { data, setData } = useContext(AppContext);

  const insert = (data, rightIndex, element) => {
    for (
      rightIndex;
      rightIndex >= 0 && data[rightIndex].value > element.value;
      rightIndex--
    ) {
      data[rightIndex + 1] = data[rightIndex];
    }
    data[rightIndex + 1] = element;
  };

  const insertionSort = () => {
    for (let i = 1; i < data.length; i++) {
      insert(data, i - 1, data[i]);
    }
    setData([...data]);
  };

  const performInsetionSort = () => {
    insertionSort();
    /*
    why does setData(sortedData) not work ???
    */
  };

  return (
    <div>
      <SortButton
        onClick={() => {
          performInsetionSort();
        }}
      >
        Insertion Sort
      </SortButton>
    </div>
  );
};

export default InsertionSort;
