// will contain the code for the tests for the calculator

/*
describe("unit", function() {
  it("spec", function() {
    expect("the result of this expression").toEqual(
      "the result of this other expression"
    );
  });
  it("another spec", function() {
    expect("the result of this expression").not.toEqual(
      "the result of this other expression"
    );
  });
});
*/

describe("sumArray function", function() {
  it("Should be a function", function() {
    expect(typeof sumArray).toBe("function");
  });

  it("Should return a number", function() {
    expect(typeof sumArray([])).toBe("number");

    expect(typeof sumArray([1, 2, 3])).toBe("number");
  });

  it("Should return the correct sum", function() {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
    expect(sumArray([-5, 3])).toBe(-2);
  });
});

// TDD

describe("multiplyArray", function() {
  it("Should be a function", function() {
    expect(typeof multiplyArray).toBe("function");
  });

  it("Should accept one parameter", function() {
    expect(multiplyArray.length).toBe(1);
  });

  it("Should accept only an array as a parameter", function() {
    expect(function() {
      multiplyArray(1);
    }).toThrow(
      new Error(
        "Could not compute the sum: parameter should be an array of numbers"
      )
    );
  });

  it("Should accept only numbers in the array argument", function() {
    expect(function() {
      multiplyArray([1, 2, 3, "abc", null]);
    }).toThrow(
      new Error(
        "Could not compute the sum: parameter should be an array of numbers"
      )
    );
  });
});
