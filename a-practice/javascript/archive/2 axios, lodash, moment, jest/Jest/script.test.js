// // ES module import
// import sum from "./script";

// common.js import
const sum = require("./sum");
const print = require("./print");

describe("simple function testing", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3);
	});

	test("prints name", () => {
		expect(print("Wookie")).toBe("Hello Wookie!");
	});
});
