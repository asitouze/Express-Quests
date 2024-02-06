const express_quests = require("../db/dbClient");

const userQueries = {
  queryGetAllUsers: () => {
    return express_quests.query("select * from users");
  },
  queryPostUser: ({
    firstname,
    lastname,
    email,
    city,
    language,
    hashedPassword,
  }) => {
    return express_quests.query(
      "INSERT INTO users (firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language, hashedPassword]
    );
  },
  queryPutUser: ({
    userId,
    firstname,
    lastname,
    email,
    city,
    language,
    hashedPassword,
  }) => {
    return express_quests.query(
      "UPDATE users SET firstname=?, lastname=?, email=?, city=?, language=?, hashedPassword=? WHERE id=?",
      [firstname, lastname, email, city, language, hashedPassword, userId]
    );
  },
};

module.exports = userQueries;
