import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { getReviewById, patchReviewVote } from "../api";
import CommentList from "./CommentList";

const SingleReview = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [addedVote, setAddedVote] = useState(0);
  const [error, setError] = useState("");
  const [isClicked, setIsClicked] = useState({ like: false, dislike: false });
  const date = new Date(currentReview.created_at).toDateString();

  const handleClick = (increment) => {
    setAddedVote((currentVote) => {
      return currentVote + increment;
    });

    patchReviewVote(review_id, increment).catch(() => {
      setAddedVote(0);
      setError("Something went wrong, try again later.");
      setIsClicked({ like: false, dislike: false });
    });
  };

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

      <p>Votes: {currentReview.votes + addedVote}</p>

      <button
        type="button"
        disabled={isClicked.like}
        onClick={() => {
          isClicked.dislike
            ? setIsClicked({ like: false, dislike: false })
            : setIsClicked({ like: true, dislike: false });
          handleClick(1);
        }}
      >
        Like it!
      </button>

      <button
        type="button"
        disabled={isClicked.dislike}
        onClick={() => {
          isClicked.like
            ? setIsClicked({ like: false, dislike: false })
            : setIsClicked({ like: false, dislike: true });

          handleClick(-1);
        }}
      >
        Dislike it!
      </button>

      {error ? <p className="error">{error}</p> : null}

      <CommentList review_id={review_id} />
    </div>
  );
};

export default SingleReview;
