const ReviewCard = ({
  title,
  review_img_url,
  owner,
  category,
  comment_count,
  created_at,
  designer,
  votes,
}) => {
  const date = new Date(created_at).toDateString();

  return (
    <div className="review">
      <img src={review_img_url} alt="img of review" />
      <h3>{title}</h3>
      <p>Author: {owner}</p>
      <p>Posted on: {date}</p>
      <p>Category: {category}</p>
      <p>Designer: {designer}</p>
      <p>Number of comments: {comment_count}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default ReviewCard;
