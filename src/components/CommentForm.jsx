import { useState } from "react";
import { postComment } from "../api";
import UsersDropdownMenu from "./UsersDropdownMenu";

const CommentForm = ({ review_id, setCommentsList }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      username: user,
      body: userInput,
    };

    postComment(review_id, requestBody).then((comment) => {
      setCommentsList((currentComments) => {
        return [comment, ...currentComments];
      });
      setUserInput("");
    });
  };

  return (
    <div className="postSubmit">
      <button
        type="button"
        onClick={() => {
          isClicked ? setIsClicked(false) : setIsClicked(true);
        }}
      >
        Leave a comment
      </button>
      {!isClicked ? null : (
        <form onSubmit={handleSubmit}>
          <UsersDropdownMenu user={user} setUser={setUser} />
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
          <button type="submit">Submit your comment</button>
        </form>
      )}
    </div>
  );
};

export default CommentForm;
