import { it, expect, describe } from "vitest";

import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
	it("throws Invalid input - must not be empty. when value is empty", () => {
		const input = "";

		const resultFn = () => {
			validateStringNotEmpty(input);
		};

		expect(resultFn).toThrow(/Invalid input - must not be empty./);
	});
});

describe("validateNumber()", () => {
	it("Throws Invalid number input. if value is not a number", () => {
		const value = "1";

		const resFn = () => {
			validateNumber(value);
		};

		expect(resFn).toThrow(/Invalid number input./);
	});
});
