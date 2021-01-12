import { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./userNotes.css";
import Axios from "axios";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

function DisplayNote({ title, content, id }) {
  const [singleNote, setSingleNote] = useState(false);
  const History = useHistory();
  const clickHandler = () => {
    singleNote ? setSingleNote(false) : setSingleNote(true);
  };

  const DeleteNoteHandler = (id) => {
    async function fetchData() {
      const request = await Axios.delete(`${History.location.pathname}/${id}`);
      return request;
    }
    fetchData();
  };
  return (
    <div className='Notes'>
      <div className={"Notes__body"}>
        <h1>{title} </h1>

        {singleNote ? (
          <p className='singleNotes__paragraphs'>{content} </p>
        ) : (
          <p className='singleNotes__paragraphs'>
            {content.substr(0, 100) + "..."}{" "}
          </p>
        )}

        <div className='note__btn'>
          <span
            className='btn_action'
            onClick={() => {
              DeleteNoteHandler(id);
            }}
          >
            Delete
          </span>
          <NavLink to={`/users/${id}/edit`} exact>
            <span className='btn_action'>Edit</span>
          </NavLink>
        </div>
      </div>

      <div
        className={"Notes__Link " + (singleNote ? "turnDown" : "turnUp")}
        onClick={() => {
          clickHandler(id);
        }}
      >
        <ExpandLessIcon className='Notes__icon' />
      </div>
    </div>
  );
}

export default DisplayNote;
