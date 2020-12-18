import React, { useContext } from 'react';
import { AppContext } from '../../App';

import { SortButton } from './SortButton';

const InsertionSort = () => {
  const { data, setData } = useContext(AppContext);
  let delay = 500;

  const insert = (data, rightIndex, element) => {
    delay += 500;
    setTimeout(() => {
      for (
        rightIndex;
        rightIndex >= 0 && data[rightIndex].value > element.value;
        rightIndex--
      ) {
        data[rightIndex + 1] = data[rightIndex];
        setData([...data]);
      }

      data[rightIndex + 1] = element;
      setData([...data]);
    }, delay);
  };

  const insertionSort = () => {
    for (let i = 1; i < data.length; i++) {
      insert(data, i - 1, data[i]);
    }
  };

  return (
    <div>
      <SortButton
        onClick={() => {
          // test();
          insertionSort();
        }}
      >
        Insertion Sort
      </SortButton>
    </div>
  );
};

export default InsertionSort;
