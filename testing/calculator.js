// will contain the code for our functions

function sumArray(numbers) {
  return numbers.reduce(function(accumulator, value) {
    return accumulator + value;
  }, 0);
}

function multiplyArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error(
      "Could not compute the sum: parameter should be an array of numbers"
    );
  }

  if (
    numbers.filter(function(num) {
      if (typeof num === "number") {
        return true;
      }
    }).length !== numbers.length
  ) {
    throw new Error(
      "Could not compute the sum: parameter should be an array of numbers"
    );
  }
}
