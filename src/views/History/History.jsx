import React from "react";
import { Layout } from "../../components/Layout";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { TbSwimming } from "react-icons/tb";
import { FaBicycle } from "react-icons/fa6";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";

function History() {
  return (
    <Layout>
      {/* Choose history type */}
      <div
        className="hidden bg-primary  text-slate-100 flex justify-between mt-24 rounded-lg m-5 lg:flex   
      "
      >
        <a className="btn btn-ghost normal-case lg:text-xl ">All</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Run</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Swim</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Walk</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Bicycle</a>
        <a className="btn btn-ghost normal-case lg:text-xl">
          <VscChevronRight />
        </a>
      </div>

      <div className="flex justify-end lg:hidden me-5">
        <div className=" dropdown dropdown-end mt-24">
          <label tabIndex={0} className=" ">
            <div className="btn btn-primary text-white ">
              Type <VscChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Card */}
      <div className=" glass mt-5 flex flex-col text-white rounded-lg m-5 p-1 lg:p-5 lg:flex-row justify-between drop-shadow-md">
        {/* icon */}
        <div className=" m-5 flex justify-center hidden lg:flex lg:justify-center flex-col border-solid">
          <FaRunning className="text-slate-900 text-20 lg:text-5xl " />
        </div>

        {/* Card image */}
        <div className="flex justify-center  flex-col hidden lg:flex ">
          <img
            src="https://i.pinimg.com/564x/51/83/33/5183331b94eb09c31eaf59bc0ac60797.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 lg:w-72 border border-red-500 w-100 lg:ml-2">
          <div className="">
            <p className="text-sm font-bold ps-5">Activity Name</p>
            <p className=" lg:text-2xl ">Running</p>

            <p className="text-sm font-bold ps-5">Description</p>
            <p className=" lg:text-2xl  ">
              "Happiness is running with friends.
            </p>
          </div>
        </div>
        {/* History Infomation */}
        <div className=" text-slate-700  lg:gap-20 lg:gap-10 gap-5 flex flex-row border border-blue-500 ps-5 mt-2">
          <div className="">
            <div className=" w-30">
              <p className="text-sm">Date </p>
              <p className="font-bold lg:text-2xl">08/09/2023</p>
            </div>
            <div className=" mt-3">
              <p className="text-sm">Distance</p>
              <p className="font-bold lg:text-2xl">3.12 km</p>
            </div>
          </div>

          <div className=" ">
            <div className=" w-30">
              <p className="text-sm">Average Pace</p>
              <p className="font-bold lg:text-2xl">8.21 /km</p>
            </div>
            <div className=" mt-3">
              <p className="text-sm">Duration</p>
              <p className="font-bold lg:text-2xl">32.04 min</p>
            </div>
          </div>
        </div>
        {/* Delete and Edit Button */}
        <div className="text-2xl ml-5 text-end">
          <a href="#" className="tooltip  tooltip-primary" data-tip="Edit">
            <TbPencil className="text-slate-900" />
          </a>

          <a href="#" className="tooltip " data-tip="Delete">
            <TbTrash className="text-slate-900" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default History;
