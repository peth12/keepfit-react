import React from "react";

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
          <div className="nav-end">
            <button className="bg-white p-2 rounded-xl px-3 mx-5 font-bold">
              Login
            </button>
            <button className="bg-white p-2 rounded-xl px-3 font-bold">
              Sign Up
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
