import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

const ReviewList = () => {
  const [reviewsList, setReviewsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviewsList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h2>Reviews</h2>
      <div className="reviewContainer">
        {reviewsList.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewList;
