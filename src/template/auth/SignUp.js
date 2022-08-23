function SignUp({ setLoginOpen }) {
  return (
    <div className="form">
      <form className="bg-white text-center h-75">
        <div className="d-flex flex-nowrap justify-content-center">
          <button
            className="btn-login"
            type="button"
            onClick={() => setLoginOpen((prev) => !prev)}
          >
            Login
          </button>
          <button className="btn-signup active-form" type="button">
            Sign up
          </button>
        </div>

        <div className="input-group h-25 p-name">
          <span className="input-group-text">
            <i className="fa-solid fa-user" />
          </span>
          <input type="text" className="form-control" placeholder="name" />
        </div>

        <div className="input-group h-25 p-email">
          <span className="input-group-text">
            <i className="fa-regular fa-envelope" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="email or phone"
          />
        </div>

        <div className="input-group h-25 p-password">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="password at least 8 characters include character and number"
          />
        </div>

        <div className="input-group h-25 p-confirmpassword">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
          />
        </div>

        <div className="btn-mt">
          <button className="btn-submit" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
