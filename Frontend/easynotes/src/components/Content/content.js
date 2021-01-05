import React, { useState } from "react";
import "./content.css";
import axios from "axios";
import { useHistory } from "react-router";

function Content() {

  const History = useHistory()

  const [postData, setpostData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const updateName = (e) => {
    const { value, name } = e.target;
    setpostData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    console.log(postData);
    if (
      postData.firstName.length > 0 &&
      postData.lastName.length > 0 &&
      postData.email.length > 0
    ) {
    
      axios.post("/users", postData);
    }
    History.push("/");
  };

  return (
    <div className='new__user'>
      <h1 className='new__user-heading'>Add new user</h1>
      <form>
        <input
          className='new__user-input'
          onChange={updateName}
          value={postData.firstName}
          name='firstName'
          placeholder='Firstname'
          required
        />

        <input
          className='new__user-input'
          onChange={updateName}
          value={postData.lastName}
          name='lastName'
          placeholder='Lastname'
          required
        />

        <input
          className='new__user-input'
          value={postData.email}
          onChange={updateName}
          name='email'
          placeholder='Email'
          required
        />

        <button
          type='submit'
          className='new__user-btn'
          onClick={postDataHandler}
        >
          create User
        </button>
      </form>
    </div>
  );
}

export default Content;
