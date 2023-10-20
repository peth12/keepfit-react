import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; // Import Axios
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`https://keepfit-backend.onrender.com/user/`, {
        email,
        password,
      });

      if (response.data.success) {
        setError("");
        Navigate("/dashboard");
        console.log("Login successful!");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while trying to log in.");
      console.error(error);
    }
  };
  
  return (
    <>
      {/* <NavbarLandingPage /> */}
      <div className=" flex h-[100vh]">
        {/* section 1 */}
        <div className="left hidden md:block h-[100%] w-[100%] "></div>
        {/* section 2 */}
        <div className="right h-[100%] w-[100%]">
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <div className="glass  flex-col flex items-center px-14 pb-14 rounded-xl">
              <h1 className=" text-[80px] text-primary  italic font-bold text-center py-3">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input input-bordered w-80"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control py-3">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-80"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-end py-2">
                No account?{" "}
                <Link to={"/signUp"} className="createAccountSuggest">
                  Create one!
                </Link>
              </p>

              <button
                className="btn-primary w-80 rounded-md p-1 text-[24px] font-semibold text-white mt-4"
                onClick={handleLogin}
              >
                Login
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
