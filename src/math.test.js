import { expect, it } from "vitest";

import { add } from "./math";

/* AAA pattern for testing
    Arrange = Define testing environment & values
    Act = Run the actual code
    Assert = evaluate the produced value
*/
it("Should sumarize all the values in the array", () => {
	const valuesArray = [1, 2, 3]; // Arrange

	const result = add(valuesArray); // Act

	// Assert
	const expectedRes = valuesArray.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedRes);
});

it("Should yield NaN if at least one invalid factor is provided", () => {
	const inputs = ["invalid", 1];

	const result = add(inputs);

	expect(result).toBeNaN(true);
});

it("should yield a correct sum if the values are numeric", () => {
	const inputs = ["1", "2"];

	const result = inputs.reduce((a, b) => +a + +b, 0);

	const test = add(inputs);

	expect(test).toBe(result);
});

it("yelds 0 if an empty array is provided", () => {
	const inputs = [];

	const result = add(inputs);

	expect(result).toEqual(0);
});

it("should throw an error if no value is provided", () => {
	// wrapped the tested function into an anonymous function
	const resultFn = () => {
		add();
	};

	// vitest executes the function and check wether it throws
	// saves us to code a try catch block
	// if oposite is expected
	// expect(resultFn).not.toThrow();
	expect(resultFn).toThrow();
});

it("should throw an error if multiple args were provided", () => {
	const num1 = 1;
	const num2 = 2;
	const resFn = () => {
		add(num1, num2);
	};

	// Check the error message with reg expression
	expect(resFn).toThrow(/is not iterable/);
});
