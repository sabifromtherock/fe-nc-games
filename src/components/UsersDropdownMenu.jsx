import { useEffect, useState } from "react";
import { getUsers } from "../api";

const UsersDropdownMenu = ({ user, setUser }) => {
  const [usersArr, setUsersArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersArray) => {
      setUsersArr(usersArray);
      setIsLoading(false);
    });
  }, [setUsersArr]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <p className="error">
        Note that <br />
        Login is not implemented yet so <br />
        Please pick an existing user
      </p>
      <select
        className="userOption"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      >
        {usersArr.map((user) => {
          return (
            <option value={user.username} key={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UsersDropdownMenu;
