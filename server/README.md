# note-taking-api;

//// GET ALL USERS
app.get("/users");

//// CREATE A USER
app.post("/users");

//// GET A SPECIFIC USER BY NAME
 app.get("/users/:userId");
 
 //// UPDATE A SPECIFIC USER
  app.patch Or put("/users/:userId");
  
  //// DELETE A SPECIFIC USER
   app.delete("/users/:userId");
   
   //// NOTES ROUTE
   
   //// GET ALL NOTES
 	 app.get("/notes");

//// FIND ONE NOTE
  app.get("/notes/:NoteName");

//// CREATE A NOTE USING AN EXISTING USERID
  app.post("/users/:userId/notes");

//// GET A USER AND THEIR NOTES
  app.get("/users/:user_id/notes");
