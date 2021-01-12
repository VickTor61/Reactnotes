import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./user.css";

function Users(props) {
  const [postArray, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    Axios.get("/users")
      .then((resp) => {
        if (isMounted) {
          setPosts(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return function cleanup() {
      isMounted = false;
    };
  });

  /////////////////////DELETE USER
  const deleteUser = (id) => {
    async function fetchData() {
      const request = await Axios.delete("/users/" + id);
      return request;
    }
    fetchData();
  };

  return (
    <div className='user__wrapper'>
      {postArray.map((data) => {
        return (
          <div className='paragraph' key={data._id}>
            <div className='user__names'>
              <p>
                {" "}
                {data.firstName} {data.lastName}
              </p>

              <Link
                className='home__link'
                to={"/users/" + data._id}
                key={data._id}
              >
                {" "}
                <ChevronRightIcon />
              </Link>
            </div>
            <button
              className='user__btn'
              onClick={() => {
                deleteUser(data._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
