'use strict'

function solveEquation(a, b, c) {
  let arr = [];

  let D;
  D = Math.pow(b, 2) - 4*a*c;
  
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = [-b / (2*a)];
  } else if (D > 0) {
    arr = [(-b + Math.sqrt(D)) / (2*a), (-b - Math.sqrt(D)) / (2*a)];
  }

  return arr; // array
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
  
  let primaryLoan = amount - contribution;
  
  let dateNow = new Date(); 
  const oneMonth = 1000 * 60 * 60 * 24 * 30; 
  let dateAll = Math.floor((date.getTime() - dateNow.getTime()) / oneMonth); 
  
  let P = percent / 100 / 12;
  let payment = primaryLoan * (P + (P / (((1 + P) ** dateAll) - 1)));
  totalAmount = Math.round((payment * dateAll) * 100) / 100;
  
  return totalAmount;
  }
}
