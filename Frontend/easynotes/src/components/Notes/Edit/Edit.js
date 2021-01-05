import Axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Edit.css";

function Edit({ title, content, variant }) {

  const History = useHistory();
  const [edit, setEdit] = useState({
    title: {title },
    content: {content},
  });
 
 


  function updatedValue(e) {
    const { name, value } = e.target;
   
    
    setEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function postNotesHandler(e) {
     e.preventDefault();


       Axios.patch(`${History.location.pathname}`, edit).then(response => {
         console.log(response);
       }).catch(error => {
         console.log(error)

       })
       
     
  }

  return (
    <div className='new__user'>
      <h1 className='new__user-heading'>edit note</h1>
      <form>
        <label className="form__label">Title</label>
        <input
          type='text'
          onChange={updatedValue}
          defaultValue={title}
          name='title'
          className='new__user-input'
        />
        <label className="form__label">Content</label>
        <textarea
          className='new__user-textarea'
          defaultValue={content}
          onChange={updatedValue}
          name='content'
          required
        />

        <button
          type='submit'
          className='new__user-btn'
          onClick={postNotesHandler}
        >
          save
        </button>
      </form>
    </div>
  );
}

export default Edit;


