const ratioOfTwoNumbers = require("../ratio/index");

const factorialOfNumber = require("../factorial/index");

function ratioAndFactorial(a, b, c) {
  let ratio = ratioOfTwoNumbers(a, b);
  let factorial = factorialOfNumber(c);

  return (result = {
    ratio: ratio,
    factorial: factorial,
  });
}

module.exports = ratioAndFactorial;
