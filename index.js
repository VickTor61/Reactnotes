require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { dataBase } = require("./server/app/model/dbConfig");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

require("./server/app/routes/userRoute")(app);
require("./server/app/routes/notesRoute")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port);

console.log(`Notes api listening on ${port}`);
