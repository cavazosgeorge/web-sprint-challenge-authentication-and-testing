const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");
const jokes = require("./jokes/jokes-data");

// Write your tests here
beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

test("sanity", () => {
  expect(true).toBe(true);
});

describe("Register", () => {
  test("Creates a new user, and returns 201 status", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "jaxhacks", password: "1234" });
    expect(res.status).toBe(201);
  });
});
