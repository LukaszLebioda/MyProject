// npm run k6 / k6 run test.js
// npm run k6debug / k6 run --http-debug="full" testfile.js
// k6 run -e BASE_URL=https://hej-ho.io testFile.js (__ENV.BASE_URL)
// https://test-api.k6.io/
// github.com/SMACAcademy/Mastery-Course-on-Grafana-Labs-k6---Performance-Testing

import http from "k6/http";
import { check, sleep } from "k6";

// optional setup function
export function setup() {
  // Initialize data if needed
  console.log("Setup: initializing data...");
}

// Main test logic
export default function () {
  const response = http.get("https://test.k6.io");
  // console.log(response.body);

  check(response, { "status is 200": (r) => r.status === 200 });

  // sleep for 1 secont to simulate user think time
  sleep(1);
}

// optional teardown function
export function teardown() {
  // Cleanup if needed
  console.log("Teardown: cleaning up...");
}
