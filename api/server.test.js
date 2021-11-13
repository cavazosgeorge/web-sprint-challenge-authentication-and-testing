const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");
const jokes = require("./jokes/jokes-data");
// Write your tests here
test("sanity", () => {
  expect(true).toBe(false);
});
