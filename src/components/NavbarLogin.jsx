import React from "react";
import { Link } from "react-router-dom";

export const NavbarLandingPage = () => {
  return (
    <nav className="">
      <div className="flex justify-center">
        <div className="px-5 py-2 flex w-[98vw] rounded-2xl bg-primary fixed z-10 justify-between items-center mt-2">
          <div className="nav-start">
            <h1 className="text-[30px] font-bold italic">
              Keep<span className="text-white">Fit</span>
            </h1>
          </div>
          <div className="nav-end flex">
            <div className="login">
              <Link to={"/"}>
                <button className="p-2  px-3 mx-5 font-bold  nav-item">
                  Login
                </button>
              </Link>
            </div>
            <Link to={"/SignUp"}>
              <button className=" p-2  px-3 font-bold nav-item">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
