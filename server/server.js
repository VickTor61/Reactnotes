require("dotenv").config();

const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const path = require("path");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { dataBase } = require("./app/model/dbConfig");
require("./app/routes/userRoute")(app);
require("./app/routes/notesRoute")(app);

// app.get("/about.json", function(req, res) {
//   res.json([1, 2, 3]);
// });

// app.use(express.static(path.join(__dirname, "Frontend/easynotes/build")));
//
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "Frontend/easynotes/build", "index.html"));
// });
//

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
