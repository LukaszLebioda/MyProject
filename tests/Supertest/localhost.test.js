// npm test filename.js
// npm run test filename.js
// yarn test filename.test.js

// // import { HTTPS_BASE_URL } from "./testSetup";
// // import { ENDPOINT } from "./endpoints";
const schema = require("../schemas/get-all-books.json");
const request = require("supertest");

describe("test localhost:4000", () => {
	it("test localhost:4000", async () => {
		const response = await request("http:localhost:4000/api/books").get("/");
		expect(response.statusCode).toBe(200);
		// console.log(response.body);
		console.log(schema);
		expect(response.body).toMatchSchema(schema);
	});
});
