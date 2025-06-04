module.exports = {
	testEnvironment: "node",
	setupFilesAfterEnv: ["./testMatchersSetup.js"],
	testMatch: ["./**/*.test.js", "./**/*.spec.js"],
};
