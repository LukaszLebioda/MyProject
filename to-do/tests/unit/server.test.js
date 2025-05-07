const request = require("supertest");
const app = require("../../server");

// Mock PostgreSQL queries
jest.mock("pg", () => {
  const mockPool = {
    query: jest.fn(),
    connect: jest.fn(),
    end: jest.fn(),
  };

  return { Pool: jest.fn(() => mockPool) };
});

const { Pool } = require("pg");
const pool = new Pool();

describe("API Endpoints", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /api/data", () => {
    it("should save data successfully", async () => {
      // Mock the successful DB response
      pool.query.mockResolvedValueOnce({
        rows: [{ id: 1, data: "Test data", created_at: new Date() }],
      });

      const response = await request(app).post("/api/data").send({ data: "Test data" });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Data saved successfully");
      expect(response.body.data).toHaveProperty("id", 1);
      expect(response.body.data).toHaveProperty("data", "Test data");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });

    it("should return 400 if data is missing", async () => {
      const response = await request(app).post("/api/data").send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Data is required");
      expect(pool.query).not.toHaveBeenCalled();
    });

    it("should return 500 if database error occurs", async () => {
      // Mock the DB error
      pool.query.mockRejectedValueOnce(new Error("DB Error"));

      const response = await request(app).post("/api/data").send({ data: "Test data" });

      expect(response.status).toBe(500);
      expect(response.body.error).toBe("Server error");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });
  });

  describe("GET /api/data", () => {
    it("should retrieve all data successfully", async () => {
      // Mock the successful DB response
      const mockData = [
        { id: 1, data: "Test data 1", created_at: new Date() },
        { id: 2, data: "Test data 2", created_at: new Date() },
      ];

      pool.query.mockResolvedValueOnce({
        rows: mockData,
      });

      const response = await request(app).get("/api/data");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0]).toHaveProperty("id", 1);
      expect(response.body[1]).toHaveProperty("id", 2);
      expect(pool.query).toHaveBeenCalledTimes(1);
    });

    it("should return 500 if database error occurs", async () => {
      // Mock the DB error
      pool.query.mockRejectedValueOnce(new Error("DB Error"));

      const response = await request(app).get("/api/data");

      expect(response.status).toBe(500);
      expect(response.body.error).toBe("Server error");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });
  });
});
