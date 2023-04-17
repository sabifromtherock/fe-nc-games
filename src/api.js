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
