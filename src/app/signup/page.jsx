import React from 'react'
import classes from './signup.css'


const SignUp = () => {
  return (
    <div>
      <div className="container bg-dark ">
        <div className="row">
          <div className="col-md-4 shadow imageRight">
            <div>
              <h1 className='text-light p-5 display-1' >Sign Up</h1>
            </div>
          </div>
          <div className="col-md-8 shadow">
            <div className="container p-5 ">
              <div className="row mb-4 gy-3">
                <h2 className='text-white fw-bold'>Create Account</h2>
                <div className="col-md-6"><button className='btn btn-outline-light w-100 rounded-pill'>  Sign Up with Google</button></div>
                <div className="col-md-6"><button className='btn btn-light w-100  rounded-pill'>Sign Up with Facebook</button></div>
              </div>
              <div className="form-floating  py-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label htmlFor="formId1 ">Name</label>
              </div>
              <div className="form-floating  py-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId2"
                  id="formId2"
                  placeholder=""
                />
                <label htmlFor="formId2 ">Email ID or Phone No.</label>
              </div>
              <div className="form-floating  py-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId3"
                  id="formId3"
                  placeholder=""
                />
                <label htmlFor="formId3 ">Username</label>
              </div>
              <div className="form-floating  py-3">
                <input
                  type="password"
                  className="form-control"
                  name="formId4"
                  id="formId4"
                  placeholder=""
                />
                <label htmlFor="formId4 ">Password</label>
              </div>
              <div className="form-check py-3">
                <input className="form-check-input" type="checkbox" value="" id="" />
                <label className="form-check-label text-white" for=""> I agree to </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill w-100"
              >
                Sign Up
              </button>
              
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default SignUp;