const CategoryCard = ({ slug, description }) => {
  return (
    <div>
      <h3>{slug}</h3>
      <p className="catDescription">
        Category description: <br />
        <br />
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;
