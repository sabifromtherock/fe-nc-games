import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/categories"}>
        <button type="button">Go to the categories</button>
      </Link>
      <Link to={"/reviews"}>
        <button type="button">Go to the reviews</button>
      </Link>
    </nav>
  );
};

export default NavBar;
