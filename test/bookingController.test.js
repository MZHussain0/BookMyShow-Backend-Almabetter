const supertest = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const {
  createBooking,
  getLatestBooking,
} = require("../controllers/movieBookingController");

// Set up a test Express app
const app = express();
app.use(bodyParser.json());
app.post("/api/booking", createBooking);
app.get("/api/booking", getLatestBooking);

// Mock MovieBooking model
const MovieBooking = require("../models/movieBookingModel");
jest.mock("../models/movieBookingModel");

describe("Booking Controller", () => {
  describe("POST /api/booking", () => {
    it("should create a booking and return 200 status code", async () => {
      // Arrange
      const mockData = { movie: "Movie Title", slot: "5pm", seats: 3 };
      MovieBooking.create.mockResolvedValue(mockData);

      // Act & Assert
      await supertest(app)
        .post("/api/booking")
        .send(mockData)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(mockData);
        });
    });

    it("should return 400 status code if required fields are missing", async () => {
      // Arrange
      const mockData = { movie: "Movie Title", slot: "5pm" }; // seats is missing

      // Act & Assert
      await supertest(app).post("/api/booking").send(mockData).expect(400);
    });
  });

  describe("GET /api/booking", () => {
    it("should return the latest booking and a 200 status code", async () => {
      // Arrange
      const mockBooking = [{ movie: "Movie Title", slot: "5pm", seats: 3 }];
      MovieBooking.find.mockReturnValue({
        sort: jest.fn().mockReturnValue({
          limit: jest.fn().mockResolvedValue(mockBooking),
        }),
      });

      // Act & Assert
      await supertest(app)
        .get("/api/booking")
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(mockBooking);
        });
    });
  });
});
