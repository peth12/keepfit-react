import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-center ">
      <div style={{"box-shadow": "0px 4px 50px rgba(255, 137.70, 0, 0.30)"}} className="navbar justify-between lg:px-10 px-3 z-10 bg-white fixed">
        <AiOutlineMenu size={30} className="text-white flex lg:hidden " />
        <div className="">
          <h1 className="text-[30px] font-bold italic">
            Keep<span className="text-primary">Fit</span>
          </h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold text-[#252525]">
            <li>
              <Link to={"/dashboard"}>
                <a href="">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link to={"/activity"}>
                <a>Activity</a>
              </Link>
            </li>
            <li>
              <Link to={"/history"}>
                <a>History</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/user"}>
                  <a className="justify-between">Profile</a>
                </Link>
              </li>
              <li className="text-red-600">
                <Link to={"/Login"}>
                  <a>Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
