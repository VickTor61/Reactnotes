import React from "react";
import "./App.css";
import axios from "axios";
import Display from "./components/display/Display";

import { BrowserRouter } from "react-router-dom";



axios.defaults.baseURL = "https://calm-harbor-66506.herokuapp.com/";

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
       <Display />
      </div>
    </BrowserRouter>
  );
}

export default App;
