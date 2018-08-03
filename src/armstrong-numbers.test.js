const ArmstrongNumbers = require("./armstrong-numbers");

describe("Armstrong Numbers", function() {
  const armstrongNumbers = new ArmstrongNumbers();

  it("Single digit numbers are Armstrong numbers", () => {
    const input = 5;
    expect(armstrongNumbers.validate(input)).toBe(true);
  });

  it("There are no 2 digit Armstrong numbers", () => {
    const input = 10;
    expect(armstrongNumbers.validate(input)).toBe(false);
  });

  it("Three digit number that is an Armstrong number", () => {
    const input = 153;
    expect(armstrongNumbers.validate(input)).toBe(true);
  });

  it("Three digit number that is not an Armstrong number", () => {
    const input = 100;
    expect(armstrongNumbers.validate(input)).toBe(false);
  });

  it("Four digit number that is an Armstrong number", () => {
    const input = 9474;
    expect(armstrongNumbers.validate(input)).toBe(true);
  });

  it("Four digit number that is not an Armstrong number", () => {
    const input = 9475;
    expect(armstrongNumbers.validate(input)).toBe(false);
  });

  it("Seven digit number that is an Armstrong number", () => {
    const input = 9926315;
    expect(armstrongNumbers.validate(input)).toBe(true);
  });

  it("Seven digit number that is not an Armstrong number", () => {
    const input = 9926314;
    expect(armstrongNumbers.validate(input)).toBe(false);
  });
});
