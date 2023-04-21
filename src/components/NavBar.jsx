import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to={"/categories"}>
        <button type="button">Go to the categories</button>
      </Link>
      <Link to={"/reviews"}>
        <button type="button">Go to the reviews</button>
      </Link>
      {!user ? (
        <Link to={"/"}>
          <button type="button">Go and pretend</button>
        </Link>
      ) : null}
    </nav>
  );
};

export default NavBar;
