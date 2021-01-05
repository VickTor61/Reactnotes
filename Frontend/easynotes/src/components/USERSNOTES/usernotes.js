import Axios from "axios";
import { useEffect, useState } from "react";
import DisplayNote from "../Notes/displayNotes/userNotes";

import { useHistory } from "react-router";

function DisplayUserNotes() {
  const History = useHistory();

  const [displayAllUserNotes, setAllUserNotes] = useState([]);

  useEffect(() => {
    const source = Axios.CancelToken.source();

    async function fetchData() {
      try {
        await Axios.get(History.location.pathname + "/notes", {
          cancelToken: source.token,
        }).then((response) => {
          setAllUserNotes(response.data);
        });
      } catch (error) {
        if (Axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    }
    fetchData()
    return () => {
      source.cancel();
    }
  });

  return (
    <div className='Notes__container'>
      {displayAllUserNotes.map((notes) => {
        return (
          <div key={notes._id}>
            <DisplayNote
              id={notes._id}
              title={notes.title}
              content={notes.content}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayUserNotes;
