// minimum selection sort
const minimumSelectionSort = (src) => {
  for (let i = 0; i < src.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < src.length; j++) { // Minimum keresés
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    console.log(i, ':', src, 'min', src[minIndex]);
    if (minIndex !== i) { // Ha nem ugyanaz a minimum
      const temp = src[i]; // csere
      src[i] = src[minIndex];
      src[minIndex] = temp;
    }
  }
};

// Beszúró rendezés
const insertionSort = (src) => {
  for (let i = 1; i < src.length; i++) {
    const temp = src[i];
    console.log('tmp', temp, ':', src);
    let j = i - 1;
    while (j >= 0 && src[j] > temp) {
      console.log(src[j]);
      src[j + 1] = src[j];
      j--;
    }
    src[j + 1] = temp;
  }
};

// Buborék rendezés
const bubbleSort = (src) => {
  for (let i = src.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (src[j] > src[j + 1]) {
        const temp = src[j];
        src[j] = src[j + 1];
        src[j + 1] = temp;
      }
    }
  }
};

const arr = [5, 2, 4, 8, 6, 3];
// minimumSelectionSort(arr);
// insertionSort(arr);
bubbleSort(arr);
console.log(arr);
