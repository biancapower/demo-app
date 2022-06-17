import React from "react"

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src="https://i.pravatar.cc/60" alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <p className="date">{props.date}</p>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export default Comment;
