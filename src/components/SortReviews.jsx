const SortReviews = ({ sortBy, setSortBy, orderBy, setOrderBy }) => {
  return (
    <form id="sortForm">
      <label htmlFor="SortBy"> Sort by</label>
      <select
        id="SortBy"
        value={sortBy}
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option value="created_at">Posted on</option>
        <option value="category">Category</option>
        <option value="designer">Designer</option>
        <option value="owner">Owner</option>
        <option value="votes">Votes</option>
        <option value="review_id">Review ID</option>
      </select>

      <label htmlFor="orderBy"> Order by</label>
      <select
        id="orderBy"
        value={orderBy}
        onChange={(event) => {
          setOrderBy(event.target.value);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
};

export default SortReviews;
