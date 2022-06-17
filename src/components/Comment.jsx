import React from "react"
import { data } from '../data/users'

const Comment = (props) => {
  // ?u= allows passing a unique identifier to force unique images
  const avatar = "https://i.pravatar.cc/60?u=" + Math.random()

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">{data[0].username}</a>
        {/* <p className="date">{data[0].birthdate}</p> */}
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export default Comment;
