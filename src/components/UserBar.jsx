const UserBar = ({ user }) => {
  return (
    <div className="userContainer">
      {user ? (
        <p className="headerUsername">
          Welcome back <br />
          <span>{user}</span>
        </p>
      ) : null}
    </div>
  );
};

export default UserBar;
