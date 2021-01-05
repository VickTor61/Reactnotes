import React, { useState } from "react";
import "./postNote.css"
import axios from "axios";

function Notes(props) {
  const [postNotes, setpostNotes] = useState({
    title: "",
    content: ""
    
  });

  const updateName = (e) => {
    const { value, name } = e.target;
    setpostNotes((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  
  const postNotesHandler = (e) => {
    e.preventDefault();
    
    if (
      postNotes.title.length > 0 &&
      postNotes.content.length > 0 
    ) {
        
  
      axios.post("/users/" + props.match.params.userId + "/notes", postNotes);
    }
  };

  return (
    <div className='new__user'>
      <h1 className='new__user-heading'>Add new note</h1>
      <form>
        <input
          className='new__user-input'
          onChange={updateName}
          value={postNotes.title}
          name='title'
          placeholder='title'
          required
        />

        <textarea
          className='new__user-textarea'
          onChange={updateName}
          value={postNotes.content}
          name='content'
          placeholder='content'
          required
        />

        

        <button
          type='submit'
          className='new__user-btn'
          onClick={postNotesHandler}
        >
          create Note
        </button>
      </form>
    </div>
  );
}

export default Notes;
