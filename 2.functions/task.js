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

  avg = Number((sum / arr.length).toFixed(2));

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

    const funcResult = func(arrOfArr[i]);
    
    if (funcResult > max) {
      max = funcResult;
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

  r = Math.abs(max - min);

  return r;
}