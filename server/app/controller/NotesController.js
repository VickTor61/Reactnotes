const { Notes, Users } = require("../model/dbConfig");

exports.findAll = (req, res) => {
  Notes.find()
    .then(foundNotes => {
      res.send(foundNotes);
    })
    .catch(err => {
      res.status(500).send({
        message: "Notes unavailable"
      });
    });
};

exports.findNote = (req, res) => {
  Notes.findOne({ title: req.params.NoteName })
    .then(foundNote => {
      res.send(foundNote);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Note with name" +
          req.params.NoteName +
          "cannot be found in the database"
      });
    });
};

/////NESTED USER WITH HIS NOTES

exports.createUsersNote = (req, res, next) => {
  const newNote = new Notes(req.body);
  const { userId } = req.params;
  newNote.userId = userId;

  return newNote
    .save()
    .then(note => {
      res.send("successfully incorporated note ");
    })
    .catch(err => next(err));
};

//GET USERS NOTE
exports.getUsersNote = (req, res, next) => {
  return Notes.find({ userId: req.params.userId })
    .exec()
    .then(notes => {
      return res.send(notes);
    })
    .catch(err => next(err));
};
/////DELETE ALL NOTES

exports.deleteAllNotes = (req, res) => {
  Notes.deleteMany({})
    .then(res.send("Notes emptied"))
    .catch(err => {
      res.send(err);
    });
};

///////////GET A PARTICULAR NOTE
exports.getASpecificNote = (req, res) => {
  Notes.findById(req.params.noteId)
    .then(foundNote => {
      foundNote ? res.send(foundNote) : res.send("note does note exist");
    })
    .catch(() => {
      return res.status(404).send({
        message: "Note not found "
      });
    });
};
//////////DELETE A SPECIFIC NOTE
exports.deleteANote = (req, res) => {
  Notes.findByIdAndRemove(req.params.noteId)
    .then(note => {
      !note
        ? res.send("Note does not exist")
        : res.send("Sucessfully deleted Note");
    })
    .catch(error => {
      res.send(error);
    });
};

/////////// UPDATE A NOTE USING PATCH
exports.updateOneNote = (req, res) => {
  Notes.findByIdAndUpdate(req.params.noteId, req.body)
    .then(updated => {
      res.send("updated note with contents: " + updated);
    })
    .catch(err => {
      if (err) {
        return res.status(404).send({
          message: "unabale to update note"
        });
      }
    });
};
