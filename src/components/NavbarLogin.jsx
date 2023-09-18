import React,{useEffect,useState} from "react";
import { useLocation } from 'react-router-dom';
import './nav.css'
import { Link } from "react-router-dom";

export const NavbarLandingPage = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if ((location.pathname === "/login")) {
        setActive(true);
    }else{
      setActive(false);
    }
}, [location, setActive]);
  return (
    <nav className="">
      <div className="flex justify-center">
        <div className="nav px-5 py-2 flex w-[100vw] bg-primary fixed z-10 justify-between items-center">
          <div className="nav-start">
            <h1 className="text-[30px] font-bold italic">
              Keep<span className="text-white">Fit</span>
            </h1>
          </div>


          <div className="nav-end flex">
            <div className="login">
              <Link to={"/login"}>
                <button className="p-2  px-3 mx-5 font-bold  nav-item">
                  Login
                </button>
              </Link>
            </div>
            <Link to={"/signUp"}>
              <button className=" p-2  px-3 font-bold nav-item">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
