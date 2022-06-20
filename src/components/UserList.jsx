import React from "react"
import { data } from '../data/users'

const UserList = (props) => {
  return (
    <div className="comment">

      <h3 className="text">{props.text}</h3>

      {data.map((user, index) => {
        // console.log(user.birthdate)

        return (
          <div key={index}>
            <a href="/" className="avatar">
              <img src={"https://i.pravatar.cc/60?u=" + Math.random()} alt="avatar" />
            </a>
            <div className="content">
              <a href="/" className="author">{user.username}</a>
              <p className="date">{user.birthdate.toString()}</p>
              <p className="password">{user.password}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default UserList;
