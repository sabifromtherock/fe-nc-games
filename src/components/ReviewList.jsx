import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";
import { Link } from "react-router-dom";
import SortReviews from "./SortReviews";

const ReviewList = ({ category }) => {
  const [reviewsList, setReviewsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, orderBy, sortBy).then((reviews) => {
      setReviewsList(reviews);
      setIsLoading(false);
    });
  }, [category, orderBy, sortBy]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h2>Reviews</h2>
      <SortReviews
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
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
