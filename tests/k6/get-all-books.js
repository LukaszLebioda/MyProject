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
