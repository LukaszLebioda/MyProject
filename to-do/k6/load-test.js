import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 20 }, // Ramp up to 20 users over 30 seconds
    { duration: "1m", target: 20 }, // Stay at 20 users for 1 minute
    { duration: "30s", target: 0 }, // Ramp down to 0 users over 30 seconds
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
    http_req_failed: ["rate<0.01"], // Less than 1% of requests should fail
  },
};

export default function () {
  // Test POST endpoint
  const payload = JSON.stringify({
    data: `Load test data ${Date.now()}`,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const postRes = http.post("http://app:3000/api/data", payload, params);

  check(postRes, {
    "POST status is 201": (r) => r.status === 201,
    "POST response has correct message": (r) => JSON.parse(r.body).message === "Data saved successfully",
  });

  // Test GET endpoint
  const getRes = http.get("http://app:3000/api/data");

  check(getRes, {
    "GET status is 200": (r) => r.status === 200,
    "GET response is an array": (r) => Array.isArray(JSON.parse(r.body)),
  });

  sleep(1);
}
