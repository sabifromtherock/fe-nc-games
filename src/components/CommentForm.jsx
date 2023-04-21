import { useState } from "react";
import { postComment } from "../api";
import { Link } from "react-router-dom";

const CommentForm = ({ review_id, setCommentsList, user }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
    setError(false);
    const requestBody = {
      username: user,
      body: userInput,
    };

    postComment(review_id, requestBody)
      .then((comment) => {
        setCommentsList((currentComments) => {
          return [comment, ...currentComments];
        });
        setUserInput("");
        setHasSubmitted(false);
      })
      .catch((err) => {
        setError(true);
        setHasSubmitted(false);
      });
  };

  return (
    <div className="postSubmit">
      {!user ? (
        <>
          <p className="error">
            You are not logged in <br /> Please pretend to be an existing user
            to leave a review
          </p>
          <Link to={"/"}>
            <button>Go and pretend</button>
          </Link>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            isClicked ? setIsClicked(false) : setIsClicked(true);
          }}
        >
          Leave a comment
        </button>
      )}

      {!isClicked ? null : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="commentInput">Comment:</label>
          <textarea
            id="commentInput"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
            placeholder="max 100 character"
            maxLength={100}
            required
          ></textarea>

          <button type="submit" disabled={hasSubmitted}>
            Submit your comment
          </button>

          {error ? (
            <p className="error">Something went wrong, try again later</p>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default CommentForm;
