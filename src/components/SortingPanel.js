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
    bubbleSortData,
    setBubbleSortData,
    isSorting,
    setIsSorting,
  } = useContext(AppContext);

  const setColor = (data, color, index) => {
    const colored = { value: data[index].value, color: color };
    data[index] = colored;
  };

  const insertionSort = () => {
    return new Promise(async (resolve, reject) => {
      for (let i = 1; i < insertionSortData.length; i++) {
        let j = i - 1;
        let current = {
          value: insertionSortData[i].value,
          color: 'lightgreen',
        };

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
      resolve('insertion sort finished!');
    });
  };

  const selectionSort = () => {
    return new Promise(async (resolve, reject) => {
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
      resolve('selection sort finished!');
    });
  };

  const bubbleSort = () => {
    return new Promise(async (resolve, reject) => {
      let len = bubbleSortData.length;

      for (let i = 0; i < bubbleSortData.length; i++) {
        await delay(50);
        for (let j = 0; j < len - 1; j++) {
          await delay(50);
          if (j > 0) setColor(bubbleSortData, COLORS.light_blue, j - 1);
          setColor(bubbleSortData, 'red', j);
          setBubbleSortData([...bubbleSortData]);

          if (bubbleSortData[j].value > bubbleSortData[j + 1].value) {
            const first = bubbleSortData[j];
            bubbleSortData[j] = bubbleSortData[j + 1];
            bubbleSortData[j + 1] = first;
          }
        }

        len--;
        setColor(bubbleSortData, 'lightgreen', bubbleSortData.length - 1 - i);
        setBubbleSortData([...bubbleSortData]);
      }
      resolve('bubble sort finished!');
    });
  };

  // const mergeSort = (array, p, r) => {
  //   if (p !== r) {
  //     const q = Math.floor((p + r) / 2);
  //     mergeSort(array, p, q);
  //     mergeSort(array, q + 1, r);
  //     merge(array, p, q, r);
  //   }
  //   setMergeSortData([...array]);

  //   // Takes in an array that has two sorted subarrays,
  //   //  from [p..q] and [q+1..r], and merges the array
  //   const merge = (array, p, q, r) => {
  //     const lowHalf = [];
  //     const highHalf = [];

  //     let k = p;
  //     let i;
  //     let j;
  //     for (i = 0; k <= q; i++, k++) {
  //       lowHalf[i] = array[k];
  //     }
  //     for (j = 0; k <= r; j++, k++) {
  //       highHalf[j] = array[k];
  //     }

  //     k = p;
  //     i = 0;
  //     j = 0;

  //     // Repeatedly compare the lowest untaken element in
  //     //  lowHalf with the lowest untaken element in highHalf
  //     //  and copy the lower of the two back into array
  //     while (i < lowHalf.length && j < highHalf.length) {
  //       if (lowHalf[i].value < highHalf[j].value) {
  //         array[k] = lowHalf[i];
  //         i++;
  //       } else {
  //         array[k] = highHalf[j];
  //         j++;
  //       }
  //       k++;
  //     }

  //     // Once one of lowHalf and highHalf has been fully copied
  //     //  back into array, copy the remaining elements from the
  //     //  other temporary array back into the array
  //     while (i < lowHalf.length) {
  //       array[k] = lowHalf[i];
  //       k++;
  //       i++;
  //     }

  //     while (j < highHalf.length) {
  //       array[k] = highHalf[j];
  //       k++;
  //       j++;
  //     }
  //   };
  // };

  return (
    <Wrapper>
      <SortButton
        disabled={isSorting}
        onClick={() => {
          setIsSorting(true);
          const insertionPromise = insertionSort();
          const selectionPromise = selectionSort();
          // mergeSort(mergeSortData, 0, mergeSortData.length - 1);
          const bubblePromise = bubbleSort();
          Promise.all([insertionPromise, selectionPromise, bubblePromise]).then(
            () => {
              setIsSorting(false);
            }
          );
        }}
      >
        Start sorting
      </SortButton>
    </Wrapper>
  );
};

export default SortingPanel;
