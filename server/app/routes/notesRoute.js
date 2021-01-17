module.exports = app => {
  const Notes = require("../controller/NotesController");

  app.get("/api/notes", Notes.findAll);

  app.get("/api/notes/:NoteName", Notes.findNote);

  app.get("/api/users/:noteId/edit", Notes.getASpecificNote);

  app.post("/api/users/:userId/notes", Notes.createUsersNote);

  app.get("/api/users/:user_id/notes", Notes.getUsersNote);

  app.patch("/api/users/:noteId/edit", Notes.updateOneNote);

  app.delete("/api/users/:userId/:noteId", Notes.deleteANote);

  app.delete("/api/notes", Notes.deleteAllNotes);
};
