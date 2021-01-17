module.exports = app => {
  const users = require("../controller/userController");

  app.get("/api/users", users.findAll);

  app.post("/api/users", users.create);

  app.get("/api/users/:userId", users.findOne);

  app.put("/api/users/:userId", users.updateOne);

  app.patch("/api/users/:userId", users.updateOneUser);

  app.delete("/api/users/:userId", users.deleteUser);

  app.delete("/api/users", users.deleteAllUser);
};
