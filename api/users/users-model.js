const db = require("../../data/dbConfig");

function find() {
  return db("users");
}
