const ReviewCard = ({
  title,
  review_img_url,
  owner,
  category,
  comment_count,
  votes,
}) => {
  return (
    <div className="review">
      <img src={review_img_url} alt="img of review" />
      <h3>{title}</h3>
      <p>Author: {owner}</p>
      <p>Category: {category}</p>
      <p>Number of comments: {comment_count}</p>
    </div>
  );
};

export default ReviewCard;
