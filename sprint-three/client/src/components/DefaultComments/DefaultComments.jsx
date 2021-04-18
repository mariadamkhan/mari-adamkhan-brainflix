import React from "react";
import "./DefaultComments.scss";

function DefaultComments({ comments }) {
  //using the state to pull data

  return (
    <>
      {comments && comments.map((comment) => {
        const commentDate = new Date(comment.timestamp); //function to convert timestamp to readable date
        return (
          <div key={comment.id} className="default-comments__wrap">
            <div className="default-comments__avatar"></div>
            <div className="default-comments__body">
              <h4 className="default-comments__name">{comment.name}</h4>
              <span className="default-comments__date">
                {commentDate.toLocaleDateString()}
              </span>
              <p className="default-comments__text">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DefaultComments;
