import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import DisplayUserNotes from "../USERSNOTES/usernotes";

import "./singlePost.css";

function SinglePost(props) {
  const [singlePost, setSinglePost] = useState({
    loading: false,
    isLoaded: null
  });

  const source = Axios.CancelToken.source();

  async function fetchData() {
    try {
      await Axios.get("/api/users/" + props.match.params.userId + "/notes", {
        cancelToken: source.token
      }).then(response => {
        console.log(response);
        setSinglePost({
          loading: true,
          isLoaded: response.data
        });
      });
    } catch (error) {
      if (Axios.isCancel(error)) {
      } else {
        throw error;
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (singlePost.loading === false) {
    return (
      <div className="loader__container">
        <div className="ids__ripple">
          <div> Loading</div>
        </div>
      </div>
    );
  } else if (singlePost.loading === true) {
    return (
      <div className="FullPost">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/users/" + props.match.params.userId + "/notes"}>
                Create Note
              </Link>
            </li>
          </ul>
        </div>

        <h1 style={{ textAlign: "center" }}>
          Welcome {singlePost.isLoaded.firstName}
        </h1>
        <DisplayUserNotes userId={props.match.params.userId} />
      </div>
    );
  }
}

export default SinglePost;
