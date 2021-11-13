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

test("If missing username or password returns (username and password required)", async () => {
  let res = await request(server)
    .post("/api/auth/register")
    .send({ password: "1234" });
  expect(res.body.message).toMatch(/username and password required/i);
  expect(res.status).toBe(401);
  res = await request(server)
    .post("/api/auth/register")
    .send({ username: "Leonardo" });
  expect(res.body.message).toMatch(/username and password required/i);
  expect(res.status).toBe(401);
}, 750);

describe("Login", () => {
  test("If login failed due to username or password, invalid cred", async () => {
    let res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Leto", password: "1234" });
    expect(res.body.message).toMatch(/invalid credentials/i);
    expect(res.status).toBe(401);
    res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Emma", password: "12345" });
    expect(res.body.message).toMatch(/invalid credentials/i);
    expect(res.status).toBe(401);
  }, 750);
});
