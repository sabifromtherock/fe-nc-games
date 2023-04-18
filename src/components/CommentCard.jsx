const CommentCard = ({ body, author, votes, created_at }) => {
  const date = new Date(created_at).toDateString();

  return (
    <div className="commentCard">
      <p className="commentBody">{body}</p>
      <p>Comment left by: {author}</p>
      <p>Date: {date}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
