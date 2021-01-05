module.exports = (app) => {
  const users = require("../controller/userController");

  app.get("/", users.findAll);

 
  app.post("/users", users.create);

  app.get("/users/:userId", users.findOne);

  app.put("/users/:userId", users.updateOne);

  app.patch("/users/:userId", users.updateOneUser);

  app.delete("/users/:userId", users.deleteUser);

  app.delete("/users", users.deleteAllUser)
};
