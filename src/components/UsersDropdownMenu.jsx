import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useNavigate } from "react-router-dom";

const UsersDropdownMenu = ({ user, setUser }) => {
  const [usersArr, setUsersArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reviews");
  };

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersArray) => {
      setUsersArr(usersArray);
      setIsLoading(false);
    });
  }, [setUsersArr]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please pretend to be one of the existing user!</h2>
      <p className="error">
        Note that <br />
        Login is not implemented yet so <br />
        Please pick an existing user
      </p>
      <select
        required
        className="userOption"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      >
        <option value="" disabled hidden>
          Select a user
        </option>

        {usersArr.map((user) => {
          return (
            <option value={user.username} key={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
      <button>Pretend</button>
    </form>
  );
};

export default UsersDropdownMenu;
