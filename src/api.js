import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://nc-games-project-bygx.onrender.com/api/reviews")
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return axios
    .get(`https://nc-games-project-bygx.onrender.com/api/reviews/${review_id}`)
    .then(({ data }) => {
      return data.review;
    });
};

export const getCommentsByReviewId = (review_id) => {
  return axios
    .get(
      `https://nc-games-project-bygx.onrender.com/api/reviews/${review_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchReviewVote = (review_id, increment) => {
  return axios
    .patch(
      `https://nc-games-project-bygx.onrender.com/api/reviews/${review_id}`,
      { inc_votes: increment }
    )
    .then(({ data }) => {
      console.log(data.review.votes);
      return data.review;
    });
};
