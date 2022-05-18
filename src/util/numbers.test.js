import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
	it("should transform a string number to type number", () => {
		const input = "1";

		const result = transformToNumber(input);

		expect(result).not.toBeTypeOf("string");
	});

	it("should yield NaN for non parseable values", () => {
		const input = "invalid";
		const input2 = {};

		const result = transformToNumber(input);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

describe("cleanNumbers()", () => {
	it("Return an array of type numbers if array type string is provided", () => {
		const values = ["2", "3"];

		const cleanedNumbers = cleanNumbers(values);

		// expect(cleanedNumbers[0]).toBeTypeOf("number");
		expect(cleanedNumbers).toEqual([2, 3]);
	});

	it("Should throw an error if an array with an empty value provided", () => {
		const values = ["", "2"];

		// Wrapp the clean function to test if an error is thrown
		const cleanedNumbers = () => {
			return cleanNumbers(values);
		};

		expect(cleanedNumbers).toThrow();
	});

	it("should throw an error if a value is not a valid number", () => {
		const values = ["invalid", 2];
		const cleanFn = () => {
			return cleanNumbers(values);
		};

		expect(cleanFn).toThrow();
	});
});
