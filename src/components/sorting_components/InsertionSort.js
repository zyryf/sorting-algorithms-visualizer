import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { COLORS } from '../../ThemeConstants';

import { SortButton } from './SortButton';

const InsertionSort = () => {
  let { data, setData } = useContext(AppContext);

  const restoreColors = () => {
    data.forEach((el) => {
      el.color = COLORS.light_blue;
    });
    setData([...data]);
  };

  const setColor = (color, index) => {
    data[index].color = color;
    setData([...data]);
  };

  const insertionSort = () => {
    let delay = 0;
    let second_delay = 0;
    for (let i = 1; i < data.length; i++) {
      let j = i - 1;
      let current = data[i];

      for (j; j > -1 && current.value < data[j].value; j--) {
        data[j + 1] = data[j];
        setData([...data]);
      }
      data[j + 1] = current;
      setData([...data]);
    }
  };

  return (
    <div>
      <SortButton
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
