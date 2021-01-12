import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import DisplayUserNotes from "../USERSNOTES/usernotes";

import "./singlePost.css";

function SinglePost(props) {
  const [singlePost, setSinglePost] = useState({
    loading: false,
    isLoaded: null,
  });

  useEffect(() => {
    const source = Axios.CancelToken.source();

    async function fetchData() {
      try {
        await Axios.get("/" + props.match.params.id, {
          cancelToken: source.token,
        }).then((response) => {
          setSinglePost({
            loading: true,
            isLoaded: response.data,
          });
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
  });

  if (singlePost.loading === false) {
    return (
      <div className="loader__container">
        <div className="ids__ripple">
          <div> Loading</div>
      
        </div>
      </div>
    )
  } else if (singlePost.loading === true) {
    return (
      <div className='FullPost'>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={"/users/" + singlePost.isLoaded._id + "/notes"}>
                Create Note
              </Link>
            </li>
          </ul>
        </div>

        <h1 style={{ textAlign: "center" }}>
          Welcome {singlePost.isLoaded.firstName}
        </h1>
        <DisplayUserNotes />
      </div>
    );
  }
}

export default SinglePost;
