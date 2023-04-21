import { useState } from "react";
import { deleteComment } from "../api";

const CommentCard = ({ body, author, votes, created_at, comment_id, user }) => {
  const date = new Date(created_at).toDateString();
  const [hasDeleted, setHasDeleted] = useState(false);
  const [error, setError] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    setHasDeleted(true);
    setError(false);

    deleteComment(comment_id).catch((err) => {
      setError(true);
      setHasDeleted(false);
    });
  };

  console.log(user);

  return (
    <div className="commentCard">
      {hasDeleted ? (
        <p className="error">Your comment has been deleted</p>
      ) : (
        <div>
          <p className="commentBody">{body}</p>
          <p>Comment left by: {author}</p>
          <p>Date: {date}</p>
          <p>Votes: {votes}</p>
          {user === author ? (
            <button onClick={handleDelete}>Delete this comment</button>
          ) : null}
          {error ? (
            <p className="error">Something went wrong, try again later</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
