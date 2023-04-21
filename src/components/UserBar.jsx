const UserBar = ({ user, setUser }) => {
  const handleLogout = (event) => {
    event.preventDefault();
    setUser("");
  };

  return (
    <div className="userContainer">
      {user ? (
        <p className="headerUsername">
          Welcome back <br />
          <span>{user}</span>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default UserBar;
