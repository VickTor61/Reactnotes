
import Users from "../User/user";
import "./posts.css";
import { NavLink } from "react-router-dom";

function Posts(props) {
  
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink exact to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/New-user'>New user</NavLink>
          </li>
        </ul>
      </header>

      <div className='Users'>
        <Users />
      </div>
    </div>
  );
}

export default Posts;
