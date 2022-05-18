import { it, expect, describe } from "vitest";

import { generateResultText } from "./output";

describe("generateResultText()", () => {
	it("should return a string no matter the result", () => {
		const val1 = 1;
		const val2 = "invalid";
		const val3 = false;

		const result1 = generateResultText(val1);
		const result2 = generateResultText(val2);
		const result3 = generateResultText(val3);

		expect(result1).toBeTypeOf("string");
		expect(result2).toBeTypeOf("string");
		expect(result3).toBeTypeOf("string");
	});

	it("return a string that contains the result", () => {
		const val = 5;

		const result = generateResultText(val);

		expect(result).toContain(val.toString());
	});

	it('return empty string if "no-calc" is provided as a result', () => {
		const result = "no-calc";

		const resultText = generateResultText(result);

		expect(resultText).toBe("");
	});

	it('should return "Invalid" if "invalid" is provided as a result', () => {
		const result = "invalid";

		const resultText = generateResultText(result);

		expect(resultText).toContain("Invalid");
	});
});
