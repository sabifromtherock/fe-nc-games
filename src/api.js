import axios from "axios";

export const getReviews = (category, order, sort_by) => {
  return axios
    .get(`https://nc-games-project-bygx.onrender.com/api/reviews`, {
      params: { category: category, order: order, sort_by: sort_by },
    })
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
      return data.review;
    });
};

export const postComment = (review_id, requestBody) => {
  return axios
    .post(
      `https://nc-games-project-bygx.onrender.com/api/reviews/${review_id}/comments`,
      requestBody
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const getUsers = () => {
  return axios
    .get("https://nc-games-project-bygx.onrender.com/api/users")
    .then(({ data }) => {
      return data.users;
    });
};

export const getCategories = () => {
  return axios
    .get("https://nc-games-project-bygx.onrender.com/api/categories")
    .then(({ data }) => {
      return data.categories;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://nc-games-project-bygx.onrender.com/api/comments/${comment_id}`
  );
};
