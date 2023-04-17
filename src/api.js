import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://nc-games-project-bygx.onrender.com/api/reviews")
    .then(({ data }) => {
      return data.reviews;
    });
};
