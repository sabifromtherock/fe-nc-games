import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <Link to={"/reviews"}>
        <h1>NC Games</h1>
      </Link>
      <p>You are pretending to be: {user}</p>
    </header>
  );
};

export default Header;
