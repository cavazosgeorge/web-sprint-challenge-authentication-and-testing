const db = require("../../data/dbConfig");

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username", "password")
    .where("id", id)
    .first();
}
