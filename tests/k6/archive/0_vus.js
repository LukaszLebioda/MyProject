import http from "k6/http";
import { check, sleep } from "k6";

// Optional setup function
export function setup() {
	// Initialize data if needed
	console.log("Setup: Initializing data...");
}

//Fixed Number of VUs for a Fixed Duration:
export let options = {
	vus: 10, // Number of VUs
	duration: "1m", // Test duration
};

//Stages for Ramp-Up and Ramp-Down:
export let options1 = {
	stages: [
		{ duration: "30s", target: 20 }, // Ramp-up to 20 VUs
		{ duration: "1m", target: 20 }, // Stay at 20 VUs
		{ duration: "30s", target: 0 }, // Ramp-down to 0 VUs
	],
};

//Fixed Number of Iterations (regardless of the time):
export let options2 = {
	iterations: 100, // Total number of iterations
	vus: 10, // Number of VUs
};

// Main test logic
export default function () {
	// Make a GET request to a test API
	let res = http.get("https://test-api.k6.io");

	// Check if the response status is 200
	check(res, { "status was 200": (r) => r.status == 200 });

	// Sleep for 1 second to simulate user think time
	sleep(1);
}

// Optional teardown function
export function teardown() {
	// Cleanup if needed
	console.log("Teardown: Cleaning up...");
}
