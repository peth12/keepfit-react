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
          <div className="nav-end">
            <Link to={'/login'}><button className={ active ? 'hidden' : 'bg-white p-2 rounded-xl px-3 mx-5 font-bold'}>
              Login
            </button>
            </Link>
            <Link to={'/signup'}><button className={ active ? 'bg-white p-2 rounded-xl px-3 font-bold' : 'hidden'}>
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
