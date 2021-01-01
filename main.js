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

function createNewRandomArray() {
  let arr = [];
  for (i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  return arr;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);

const reverseArray = array1.reverse();
console.log(reverseArray);

array1.push(4, 5, 6); // добавелние в конец массива
console.log(array1);

array1.unshift(0); // добавление в начало массива
console.log(array1);

array1.shift(); // вырезка последнего елемента
console.log(array1);

array1.pop(); // вырезка 1 елемента
console.log(array1);

console.log(array1.slice(1)); // новый масив!!!, от исходника старого  
console.log(array1);
console.log('Splice');
console.log(array1.splice(0, 2)); // синтаксис splice(начало сплайса:кол-во елементов)
console.log(array1);


function compareNumbers(a, b) {
  return a - b; // отображение в человеческом(нормальном порядке), обычно по табличке Unicode
}
array1.sort();
console.log(array1);
array1.push(10, 20, 34, 11);
array1.sort(); // unicode
console.log(array1);
array1.sort();
console.log('Сортировка с функцией compareNumbers:', array1.sort(compareNumbers)); // нормальное