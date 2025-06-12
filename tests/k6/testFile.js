// npm run k6 (k6 run testfile.js)
// npm run k6debug (k6 run --http-debug="full" testfile.js)
// k6 run -e BASE_URL=https://lala.io testFile.js (__ENV.BASE_URL)
// https://test-api.k6.io/

import http from "k6/http";

export const options = {
	iterations: 1,
};

export default function () {
	const response = http.get("https://quickpizza.grafana.com");
}
