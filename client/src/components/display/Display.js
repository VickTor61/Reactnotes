import React from "react";
import Notes from "../Notes/postnote";
import Posts from "../posts/posts";
import Content from "../Content/content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePost from "../singlePosts/singlePost";
import FullNote from "../Notes/FullNote/FullNote";

const Display = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/New-user" exact component={Content} />
          <Route path="/users/:userId" exact component={SinglePost} />
          <Route path="/users/:userId/notes" exact component={Notes} />
          <Route path="/users/:noteId/edit" exact component={FullNote} />
        </Switch>
      </Router>
    </div>
  );
};

export default Display;
