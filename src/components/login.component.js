import React, { userState, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Log in</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          onChange={(value) => setEMail(value)}
          type="email"
          className="form-control"
          placeholder="jhondoe@mail.com"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          onChange={setPassword(value)}
          type="password"
          className="form-control"
          placeholder="*******"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default Login;
