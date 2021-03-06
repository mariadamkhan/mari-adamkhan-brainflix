import React from "react";
import "./Form.scss";


const Form = ({comments}) => {
  return (
    <>
      <h3 className="comments__total">{comments && comments.length} Comments</h3>
      <div className="comments__container">
      <div className="comments__avatar"></div>
      <form id="form" className="comments__form" name="form">
        <label htmlFor="userComment" className="comments__heading">
          Join the Conversation
        </label>
        <textarea
          type="text"
          id="userComment"
          className="comments__comment-input"
          name="userComment"
          placeholder="Add a new comment"
        ></textarea>
        <button type="submit" className="comments__cta">Comment</button>
      </form>
      </div>
    </>
  );
};

export default Form;
