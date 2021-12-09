const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for(let i of arr) {
    sum += i;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
	for(let i of arr) {
    sum *= i;
  }
  return sum;
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
	let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
