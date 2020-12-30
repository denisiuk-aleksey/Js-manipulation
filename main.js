const arr1 = [4, -2, 5, 19, -130, 0, 10];

function findMinValue(arr) {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

function findMaxValue(arr) {
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

const arr = [12, 15, 20, 25, 59, 79];

function findArithmeticValue(arr) {
  let popularitySum = 0;
  for (let i = 0; i < arr.length; i++) {
    popularitySum += arr[i];
  }
  return popularitySum / arr.length;
}

console.log(Math.ceil(Math.random() * 100));

const arr2 = [];

function createNewRandomArray() {
  let arr = [];
  for (i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  return arr;
}