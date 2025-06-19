// npm run k6:test (k6 run testfile.js)
// npm run k6debug (k6 run --http-debug="full" testfile.js)
// k6 run -e BASE_URL=https://lala.io testFile.js (\_\_ENV.BASE_URL)

//github.com/SMACAcademy/Mastery-Course-on-Grafana-Labs-k6---Performance-Testing

import { FE_BASE_URL } from "../test-setup.ts";
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
	stages: [
		{ duration: "10s", target: 10 },
		{ duration: "30s", target: 10 },
		{ duration: "10s", target: 0 },
	],
};

export default function () {
	const response = http.get(`${FE_BASE_URL}/api/books`);
	check(response, { "status is 200": (r) => r.status === 200 });
	sleep(1);
}
