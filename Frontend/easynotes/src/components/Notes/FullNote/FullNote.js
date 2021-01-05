import Axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Edit from "../Edit/Edit";



function FullNote() {

const [note, setNote] = useState([]);
const History = useHistory()

/////// GET NOTE TO BE EDITED

const NotesLocation = `${History.location.pathname}`;
useEffect(() => {
  const source = Axios.CancelToken.source();
  async function fetchData() {
    try {
      await Axios.get(NotesLocation, {
        cancelToken: source.token,
      }).then((response) => {
        setNote(response.data);
      });
    } catch (error) {
      if (Axios.isCancel(error)) {
      } else {
        throw error;
      }
    }
  }
  fetchData();
  return () => {
    source.cancel();
  };
}, [NotesLocation]);



// function submit(e) {
//     e.preventDefault();
//     console.log(e)
// }


    return (
        <div>
        <Edit title={note.title} content={note.content} variant={true} />
        </div>
    )
}

export default FullNote;