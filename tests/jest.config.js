module.exports = {
	testEnvironment: "node",
	setupFilesAfterEnv: ["./testMatchersSetup.js"],
	testMatch: ["./**/*.test.ts", "./**/*.spec.ts"],
};
