import React, { useState, useContext } from 'react';

import { AppContext } from '../../App';
import delay from './delay';
import { SortButton } from './SortButton';

const InsertionSort = () => {
  let { data, setData } = useContext(AppContext);

  const { isSorting, setSorting } = useContext(AppContext);
  const setColor = (color, index) => {
    console.log(data[index]);
    data[index].color = color;
    setData([...data]);
  };

  const insertionSort = async () => {
    setSorting(true);
    for (let i = 1; i < data.length; i++) {
      let j = i - 1;
      let current = data[i];

      for (j; j > -1 && current.value < data[j].value; j--) {
        await delay(50);
        data[j + 1] = data[j];
        setData([...data]);
      }
      await delay(50);
      data[j + 1] = current;
      setData([...data]);
      for (let x = 0; x <= i; x++) {
        setColor('lightgreen', x);
      }
    }
    setSorting(false);
  };

  return (
    <div>
      <SortButton
        disabled={isSorting}
        onClick={() => {
          insertionSort();
        }}
      >
        Insertion Sort
      </SortButton>
    </div>
  );
};

export default InsertionSort;
