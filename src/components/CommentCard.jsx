import { useState } from "react";
import { deleteComment } from "../api";

const CommentCard = ({ body, author, votes, created_at, comment_id, user }) => {
  const date = new Date(created_at).toDateString();
  const [hasDeleted, setHasDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    setHasDeleted(true);
    setError(false);

    setTimeout(() => {
      setHasTimeElapsed(true);
    }, 3000);

    deleteComment(comment_id).catch((err) => {
      setError(true);
      setHasDeleted(false);
    });
  };

  return (
    <div>
      {hasTimeElapsed ? null : !hasDeleted ? null : (
        <p className="error">Your comment has been deleted</p>
      )}
      {hasDeleted ? null : (
        <div className="commentCard">
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
