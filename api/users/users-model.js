const db = require("../../data/dbConfig");

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}
