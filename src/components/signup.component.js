import React, { Component } from "react";

function SignUp() {
    return (
      <form>
        <h3>Register</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Jhon"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Doe" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="jhondoe@mail.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="******"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    );
  }

  export default SignUp
