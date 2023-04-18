import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByReviewId } from "../api";

const CommentList = ({ review_id }) => {
  const [commentsList, setCommentslist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(review_id).then((comments) => {
      setCommentslist(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="commentsContainer">
      {commentsList.length === 0 ? (
        <h3>There is no comment on this review</h3>
      ) : (
        <h3>Comments on this review</h3>
      )}
      {commentsList.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </div>
  );
};

export default CommentList;
