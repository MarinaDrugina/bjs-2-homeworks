// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i];
    }
    
    if (arr[i] < min) {
      min = arr[i];
    }
  
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {

    if(func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}


// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let r = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  r = max - min;
  r = Math.abs(r);

  return r;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {

    if(func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}