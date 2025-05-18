//npm test, npm run test

// import schema from "./schemas/*.json";
// import { HTTPS_BASE_URL } from "./testSetup";
// import { ENDPOINT } from "./endpoints";
const request = require("supertest");

describe("test localhost:4000", () => {
  it("test localhost:4000", async () => {
    const response = await request("http:localhost:4000/api/books").get("/");
    expect(response.statusCode).toBe(200);
    // expect(response.body).toMatchSchema(schema);
  });
});
