const { Users, Notes } = require("../model/dbConfig");

exports.create = (req, res) => {
  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  user
    .save()
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occure+d while creating user",
      });
    });
};

exports.findAll = (req, res) => {
  Users.find()
    .then((foundUser) => {
      res.send(foundUser);
    })
    .catch((err) => {
      res.send({
        message: err,
      });
    });
};

//Find a single user

exports.findOne = (req, res) => {
  Users.findById(req.params.userId)
    .then((founduser) => {
      !founduser ? res.send("user not found") : res.send(founduser);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "User is not found ",
      });
    });
};

//UPDATE USERS

exports.updateOne = (req, res) => {
  Users.findByIdAndUpdate(
    req.params.userId,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    { new: true }
  )
    .then((updatedUser) => {
      res.send("updated user with contents: " + updatedUser);
    })
    .catch((err) => {
      if (err) {
        return res.status(404).send({
          message: "unabale to update user",
        });
      }
    });
};

exports.updateOneUser = (req, res) => {
  Users.findByIdAndUpdate(req.params.userId, req.body)
    .then((updatedUser) => {
      res.send("updated user with contents: " + updatedUser);
    })
    .catch((err) => {
      if (err) {
        return res.status(404).send({
          message: "unabale to update user",
        });
      }
    });
};
exports.deleteUser = (req, res, next) => {
 Users.findByIdAndRemove({_id: req.params.userId}, function (err, notes) {
   if(err) {
     res.send(err)
   }
    Notes.deleteMany({ userId:  req.params.userId  }, function(err, notes) {
      if(err) {res.send(err)}
    })
    res.json({message: "successfully deleted"})
 });
       
    
};

exports.deleteAllUser = (req, res) => {
  Users.deleteMany({})
    .then(res.send("database emptied"))
    .catch((err) => {
      res.send(err);
    });
};

/*.then(note => {
    !note ? res.send("Note does not exist") : res.send("Sucessfully deleted Note")
  }).catch(error => {
    res.send(error)*/
