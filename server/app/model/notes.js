const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//NOTE SCHEMA
const NotesSchema = new Schema(
    {
      title: {
        type: String,
        required: [true, "specify note title"]
      },

     content: {
        type: String,
        required: [true, "note content can't be empty"]
      },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    },
    {
      timestamps: true,
    }
  );
 Notes = mongoose.model("Note", NotesSchema);


  module.exports =  Notes;