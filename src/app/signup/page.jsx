'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';
import classes from './signup.css'


const SignUp = () => {

  const signupValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required').min(3, 'Name is Too Short'),
    email: Yup.string().email('Invalid Email').required('Email is Required'),
    userName: Yup.string().required('UserName is Required').min(3, 'UserName is Too Short'),
    password: Yup.string().required('Password is Required').min(6, 'Password is Too Short')
      .matches(/[A-Z]/, 'Password must contain uppercase letter')
      .matches(/[a-z]/, 'Password must contain lowercase letter')
      .matches(/[0-9]/, 'Password must contain number'),
    confirmPassword: Yup.string().required('Confirm Password is Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      userName:'',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: signupValidationSchema
  });
  return (
    <div>
      <div className="container bgColor ">
        <div className="row">
          <div className="col-md-4 shadow  imageRight">
            <div>
              <h1 className='text-light p-5 py-5 display-1' >Sign Up</h1>
            </div>
          </div>

          <div className="col-md-8 shadow">
            <div className="container p-5 ">
              <div className="row mb-4 gy-3">
                <h2 className='text-white fw-bold'>Create Account</h2>
                <div className="col-md-6"><button className='btn btn-outline-light w-100 rounded-pill'>  Sign Up with Google</button></div>
                <div className="col-md-6"><button className='btn btn-light w-100  rounded-pill'>Sign Up with Facebook</button></div>
              </div>
              <form onSubmit={signupForm.handleSubmit}>
                <div className="form-floating m-3 ">
                  <input
                    type="text"
                    className="form-control  border border-primary border-3"
                    name="name"
                    id="name"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    class="form-control"
                    placeholder=""
                  />
                  <label htmlFor="formId1 ">Name</label>
                  {
                    signupForm.touched.name &&
                    <small class="text-danger">{signupForm.errors.name}</small>
                  }
                </div>
                <div className="form-floating m-3 ">
                  <input
                    type="text"
                    className="form-control border border-primary border-3"
                    name="email"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    class="form-control"
                    placeholder=""
                  />
                  <label htmlFor="formId2 ">Email ID or Phone No.</label>
                  {
                    signupForm.touched.email &&
                    <small class="text-danger">{signupForm.errors.email}</small>
                  }
                </div>
                <div className="form-floating m-3 ">
                  <input
                    type="text"
                    className="form-control border border-primary border-3"
                    name="userName"
                    id="userName"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.userName}
                    class="form-control"
                    placeholder=""
                  />
                  <label htmlFor="userName ">Username</label>
                  {
                          signupForm.touched.userName &&
                          <small class="text-danger">{signupForm.errors.userName}</small>
                        }
                </div>
                <div className="form-floating  m-3">
                  <input
                    type="password"
                    className="form-control border border-primary border-3"
                    name="password"
                    id="password"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    class="form-control"
                    placeholder=""
                  />
                  <label htmlFor="password ">Password</label>
                  {
                    signupForm.touched.password &&
                    <small class="text-danger">{signupForm.errors.password}</small>
                  }
                </div>
                <div className="form-floating  m-3">
                  <input
                    type="password"
                    className="form-control border border-primary border-3"
                    name="confirmPassword"
                    id="confirmPassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.confirmPassword}
                          class="form-control"
                    placeholder=""
                  />
                  <label htmlFor="confirmPassword ">Confirm Password</label>
                  {
                    signupForm.touched.confirmPassword &&
                    <small class="text-danger">{signupForm.errors.confirmPassword}</small>
                  }
                </div>
                <div className="form-check m-3">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label text-white" for=""> I agree to the Platform's Terms of Service and Privacy Policies.</label>
                </div>
                <div className='text-center'>
                  <button
                    type="submit"
                    className="  "
                  >
                    Sign Up
                  </button>
                  <p className='text-light p-3'>Already have an Account?
                    <span><a href="./login">  Log in</a></span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default SignUp;