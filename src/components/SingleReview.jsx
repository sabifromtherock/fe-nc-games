import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { getReviewById } from "../api";
import CommentList from "./CommentList";

const SingleReview = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date(currentReview.created_at).toDateString();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((review) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="singleReview">
      <h2>Review</h2>
      <div className="reviewCard">
        <ReviewCard
          title={currentReview.title}
          review_img_url={currentReview.review_img_url}
          owner={currentReview.owner}
          category={currentReview.category}
          comment_count={currentReview.comment_count}
        />
      </div>
      <p>Created at: {date}</p>
      <p>Votes: {currentReview.votes}</p>
      <CommentList review_id={review_id} />
    </div>
  );
};

export default SingleReview;
