module.exports = (app) => {
  const Notes = require("../controller/NotesController");

  app.get("/notes", Notes.findAll);

  app.get("/notes/:NoteName", Notes.findNote);

  app.get("/users/:noteId/edit", Notes.getASpecificNote);

  app.post("/users/:userId/notes", Notes.createUsersNote);

  app.get("/users/:user_id/notes", Notes.getUsersNote);

  app.patch("/users/:noteId/edit", Notes.updateOneNote);

  app.delete("/users/:userId/:noteId", Notes.deleteANote);

  app.delete("/notes", Notes.deleteAllNotes);
};
