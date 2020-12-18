import React, { useContext } from 'react';
import { AppContext } from '../../App';

import { SortButton } from './SortButton';

const InsertionSort = () => {
  let { data, setData } = useContext(AppContext);

  const insertionSort = () => {
    let n = data.length;
    let delay = 0;
    for (let i = 1; i < n; i++) {
      delay += 100;
      let second_delay = 0;
      let iterationsNumber = 0;
      // Choosing the first element in our unsorted subarray
      let current = data[i];

      // The last element of our sorted subarray
      let j = i - 1;

      // copyting the data
      let copyOfData = [...data];
      let copyOfCurrent = { ...current };
      let copyOfJ = j;

      // helper loop to check iterations
      while (j > -1 && current.value < data[j].value) {
        data[j + 1] = data[j];
        iterationsNumber++;
        j--;
      }
      // assigning back the original data
      j = copyOfJ;
      data = copyOfData;
      current = copyOfCurrent;

      setTimeout(() => {
        console.log(`pierwszy`);
        while (j > -1 && current.value < data[j].value) {
          second_delay += 100;
          setTimeout(() => {
            console.log(copyOfJ);
            data[copyOfJ + 1] = data[copyOfJ];
            setData([...data]);
            copyOfJ--;
          }, second_delay);

          j--;
        }
      }, delay);
      delay += (iterationsNumber + 1) * 100;
      setTimeout(() => {
        console.log('drugi');
        data[j + 1] = current;
        setData([...data]);
      }, delay);
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
