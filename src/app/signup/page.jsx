import React from 'react'
import classes from './signup.module.css'
const SignUp = () => {
  return (
    <div>
      <div className="container-fluid">
  {" "}
  <div className="row no-gutter">
    {" "}
    <div className="col-md-6 d-none d-md-flex bg-image" />{" "}
    <div className="col-md-6 bg-light">
      {" "}
      <div className="login d-flex align-items-center py-5">
        {" "}
        <div className="container">
          {" "}
          <div className="row">
            {" "}
            <div className="col-lg-7 col-xl-6 mx-auto">
              {" "}
              <h3 className="display-4">LOGIN!!</h3> <br />{" "}
              <form>
                {" "}
                <div className="form-group mb-3">
                  {" "}
                  <input
                    id="inputEmail"
                    type="email"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                    className="form-control rounded-pill border-0 shadow-sm px-4"
                  />{" "}
                </div>{" "}
                <div className="form-group mb-3">
                  {" "}
                  <input
                    id="inputPassword"
                    type="password"
                    placeholder="Password"
                    required=""
                    className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                  />
                  <br />{" "}
                </div>{" "}
                <div className="custom-control custom-checkbox mb-3">
                  {" "}
                  <input
                    id="customCheck1"
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />{" "}
                  <label
                    htmlFor="customCheck1"
                    className="custom-control-label"
                  >
                    Remember password
                  </label>{" "}
                </div>{" "}
                <button
                  type="submit"
                  className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                >
                  Sign in
                </button>{" "}
                <div className="text-center d-flex justify-content-between mt-4">
                  <p>
                    {" "}
                    OR &nbsp;
                    <a href=" " className="font-italic text-muted">
                      {" "}
                      <u>Create Account</u>
                    </a>
                  </p>
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
</div>

    </div>

  )
}

export default SignUp;