const userQueries = require("../../models/userQueries");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const [users] = await userQueries.queryGetAllUsers();
      if (users.length) {
        res.send({
          status: 200,
          message: "liste des users",
          users,
        });
      } else {
        res.send("pas de users");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  postUser: async (req, res) => {
    try {
      const userData = req.body;
      const result = await userQueries.queryPostUser(userData);
      if (result.affectedRows > 0) {
        res.status(201).send("Utilisateur ajouté avec succès");
      } else {
        res.status(500).send("Échec de l'ajout de l'utilisateur");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  putUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const userData = req.body;
      userData.userId = userId;
      const result = await userQueries.queryPutUser(userData);
      if (result.affectedRows > 0) {
        res.status(200).send("Utilisateur a été mis à jour ");
      } else {
        res.status(404).send("L'utilisateur n'a pas été trouvé");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
