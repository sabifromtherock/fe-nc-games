import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

const CategoryReviews = () => {
  const { category } = useParams();

  return (
    <div>
      <h2>{category}</h2>
      <ReviewList category={category} />
    </div>
  );
};

export default CategoryReviews;
