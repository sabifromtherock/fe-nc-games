import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../api";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((currentCategories) => {
      setCategories(currentCategories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <section>
      <h2>Choose a category</h2>
      <div className="categoryContainer">
        {categories.map((category) => {
          return (
            <Link
              className="category"
              key={category.slug}
              to={`/categories/${category.slug}`}
            >
              <CategoryCard
                slug={category.slug}
                description={category.description}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
