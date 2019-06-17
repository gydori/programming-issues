// Összegzés tétel
const sumArray = (arr) => {
  let sm = 0;
  for (let i = 0; i < arr.length; i++) {
    sm += arr[i]; // sm = sm + arr[i]
  }
  return sm;
};

console.log('Összeg:', sumArray([1, 2, 3, 4, 5]));

// Elemek szorzása
const mulArray = (arr) => {
  let mp = 1;
  for (let i = 0; i < arr.length; i++) {
    mp *= arr[i]; // sm = sm + arr[i]
  }
  return mp;
};

console.log('Szorzat:', mulArray([1, 2, 3, 4, 5]));

// Megszámlálás
const countElement = (e, arr) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (e === arr[i]) {
      c++;
    }
  }
  return c;
};

console.log('Előfordulás: ', countElement(1, [1, 2, 3, 1, 5]));

// Max
const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Maximum:', maxArray([1, 2, 3, 4, 5, 2, 8, 3]));

// Min
const minArray = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log('Minimum:', minArray([1, 2, 3, 4, 5, 2, 8, 3]));

// Eldöntés
const containsArray = (e, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      return true;
    }
  }
  return false;
};

console.log('Van-e benne', containsArray(9, [9, 2, 3, 6, 4]));

// Keresés
const indexOfArray = (e, arr) => {
  let i = 0;
  while (i < arr.length && arr[i] !== e) {
    i++;
  }
  if (i < arr.length) {
    return i;
  } else {
    return -1;
  }
};

console.log('A keresett elem indexe:', indexOfArray(8, [1, 2, 3, 4, 5]));

// Másolás
const copy2xArray = (arr) => {
  let ketszer = [];
  for (let i = 0; i < arr.length; i++) {
    ketszer[i] = arr[i] * 2;
  }
  return ketszer;
};

console.log('A szamok kétszerese:', copy2xArray([1, 2, 3, 4, 5]));

// Kiválogatás
const selectEven = (arr) => {
  let paros = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      paros[j] = arr[i];
      j++;
    }
  }
  return paros;
};

console.log('Páros elemek:', selectEven([1, 3, 5, 8, 4, 7, 9, 10]));

// Szétválogatás
const selectEvenOdd = (arr, paros, paratlan) => {
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      paros[j] = arr[i];
      j++;
    } else {
      paratlan[k] = arr[i];
      k++;
    }
  }
};
let paros = [];
let paratlan = [];
selectEvenOdd([1, 2, 3, 4, 5, 6], paros, paratlan);
console.log('Páros elemek:', paros, 'páratlan elemek:', paratlan);

// Metszet
const intersection = (arr1, arr2) => {
  let metszet = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        metszet[k] = arr1[i];
        k++;
        break;
      }
    }
  }
  return metszet;
};

console.log(intersection([1, 3, 5, 7], [1, 2, 1, 5, 7]));

// Unió
const union = (arr1, arr2) => {
  let unio = arr1;
  for (let i = 0; i < arr2.length; i++) {
    let k = 0;
    for (let j = 0; j < unio.length; j++) {
      if (arr2[i] !== unio[j]) {
        k++;
      }
    }
    if (k === unio.length) {
      unio.push(arr2[i]);
    }
  }
  return unio;
};

console.log(union([1, 3, 5, 7], [1, 2, 8, 5, 7]));
