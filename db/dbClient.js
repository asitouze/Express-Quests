const mysql = require("mysql2/promise");

const express_quests = mysql.createConnection({
  host: "localhost",
  user: "mon user",
  password: "mon mdp",
  database: "express_quests",
});

module.exports = express_quests;
