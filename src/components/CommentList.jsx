import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByReviewId } from "../api";

const CommentList = ({ review_id, commentsList, setCommentsList, user }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {};

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(review_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [review_id, setCommentsList]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="commentsContainer">
      {commentsList.length === 0 ? (
        <h3>There is no comment on this review</h3>
      ) : (
        <h3>Comments on this review</h3>
      )}
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <CommentCard {...comment} />
            {user === comment.author ? (
              <button onClick={handleDelete}>Delete this comment</button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
