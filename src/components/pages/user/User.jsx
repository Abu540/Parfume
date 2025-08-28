import "./user.css";
const User = () => {
  return (
    <div>
      <div className="container">
        <div className="line-user">
          <div className="log">
            <div className="start">
              <h3>LOG IN AS A SELLER</h3>
            </div>
            <div className="end">
              <div className="username">
                <h3>USERNAME</h3>
                <input type="text" />
              </div>
              <div className="password">
                <h3>Password</h3>
                <input type="text" />
              </div>
              <button>LOG IN AS A SELLER</button>
            </div>
            <div className="post">
              <p>Not a seller? </p>
              <h3>Log In as a User and start shopping!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
