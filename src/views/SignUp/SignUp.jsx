import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { AiOutlineArrowLeft  ,AiOutlineArrowRight} from "react-icons/ai";
const SignUp = () => {
  const [FormData, setFormData] = useState({
    Userfname: "",
    Userlname: "",
    UserDateOfBirth: "",
    Gender: "",
    Weight: "",
    Height: "",
    UserEmail: "",
    UserPassword: "",
    RePassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    //Check Password and Repassword
    if (FormData.UserPassword !== FormData.RePassword) {
      setErrorMessage("Password and Re-Password do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://keepfit-backend.onrender.com/auth/register",
        FormData
      );

      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
      setErrorMessage("Error saving data. Please try again.");
    }
  };

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
                  <span className="label-text text-primary font-semibold text-[16px]">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  name="Userfname"
                  value={FormData.Userfname}
                  onChange={handleInputChange}
                  placeholder="Enter Firstname"
                  className="input input-bordered w-80 h-10"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    LastName
                  </span>
                </label>
                <input
                  type="text"
                  name="Userlname"
                  placeholder="Enter Lastname"
                  value={FormData.Userlname}
                  onChange={handleInputChange}
                  className="input input-bordered w-80 h-10"
                />
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">
                      Date of Birth
                    </span>
                  </label>
                  <input
                    type="date"
                    name="UserDateOfBirth"
                    placeholder="Enter Lastname"
                    value={FormData.UserDateOfBirth}
                    onChange={handleInputChange}
                    className="input input-bordered w-40 text-secondary mr-4"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">
                      Gender
                    </span>
                  </label>
                  {/* problem */}
                  <select
                    name="Gender"
                    className="select select-bordered text-gray-400 "
                  >
                    <option disabled selected>
                      None
                    </option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Not specified</option>
                  </select>
                </div>
              </div>
              {/* problem */}
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px] ">
                      Weigth
                    </span>
                  </label>

                  <input
                    type="number"
                    name="Weight"
                    placeholder="Enter Weigth"
                    value={FormData.Weight}
                    onChange={handleInputChange}
                    className="input input-bordered w-[9.5rem] text-secondary h-10 mr-4 "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary font-semibold text-[16px]">
                      Height
                    </span>
                  </label>
                  <input
                    type="number"
                    name="Height"
                    placeholder="Enter Height"
                    value={FormData.Height}
                    onChange={handleInputChange}
                    className="input input-bordered w-[9.5rem] text-secondary h-10"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Email222
                  </span>
                </label>
                <input
                  type="text"
                  name="UserEmail"
                  placeholder="Enter Email"
                  value={FormData.UserEmail}
                  onChange={handleInputChange}
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control pb-4">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="UserPassword"
                  placeholder="Enter password"
                  value={FormData.UserPassword}
                  onChange={handleInputChange}
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control pb-4">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Re-Password
                  </span>
                </label>
                <input
                  type="password"
                  name="RePassword"
                  value={FormData.RePassword}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="input input-bordered w-80"
                />
              </div>

              {/* <Link to={"/activity"}> */}
              <button
                onClick={handleSubmit}
                className="btn-primary w-80 rounded-md p-1 text-[24px] font-semibold text-white"
              >
                Sign Up
              </button>
              <div className="flex  pt-3  gap-x-3 items-center pb-3 w-[300px] justify-between">
                <span className="text-primary flex flex-row items-center w-1/2">
                  <AiOutlineArrowLeft /> <a href="/">Explore more</a>
                </span>
                <span className=" justify-end flex flex-row items-center w-1/2">
                  <a href="/">Login</a>
                  <AiOutlineArrowRight />
                </span>
              </div>
        
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
