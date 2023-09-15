import { NavbarLandingPage } from "../../components/NavbarLandingPage";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <NavbarLandingPage />
      <div className="left flex h-[100vh]">
        {/* section 1 */}
        <div className="h-[100%] w-[100%]"></div>
        {/* section 2 */}
        <div className="right h-[100%] bg-white w-[100%]">
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <div className="flex-col">
              <h1 className="text-primary text-[48px] italic font-bold text-center">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email or Username"
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter password"
                  className="input input-bordered w-80"
                />
              </div>
              <p></p>
              <button className="btn-primary w-80 rounded-md p-1 text-[24px] font-semibold text-white mt-4">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
