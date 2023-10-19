import React, { useState } from "react";
import "./Signup.css";
const SignUp = () => {

  return (
    <>
      {/* <NavbarLandingPage /> */}
      <div className=" flex min-h-[100vh]">
        {/* section 1 */}
        <div className="left hidden md:block min-h-[100%] w-[100%]"></div>
        {/* section 2 */}
        <div className="right min-h-[100%] bg-white w-[100%]">
          <div className="flex justify-center items-center w-[100%] min-h-[100%]">
          <div className="glass  flex-col flex items-center px-14 pb-14 rounded-xl">
              <h1 className=" text-[70px] text-primary italic font-bold text-center">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Firstname"
                  className="input input-bordered w-80 h-10"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">LastName</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Lastname"
                  className="input input-bordered w-80 h-10"
                />
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Lastname"
                    className="input input-bordered w-40 text-secondary"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">
                      Gender
                    </span>
                  </label>
                  <select className="select select-bordered text-gray-400 ">
                    <option disabled selected>
                      None
                    </option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Not specified</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">Weigth</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Weigth"
                    className="input input-bordered w-[9.5rem] text-secondary h-10" 
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">Height</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Height"
                    className="input input-bordered w-[9.5rem] text-secondary h-10"
                  />
                </div>

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control pb-4">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-80"
                />
              </div>

              {/* <Link to={"/activity"}> */}
              <button className="btn-primary w-80 rounded-md p-1 text-[24px] font-semibold text-white">
                Sign Up
              </button>

              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
