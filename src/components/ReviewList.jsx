import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";
import { Link } from "react-router-dom";

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
          return (
            <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
              <ReviewCard {...review} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;
