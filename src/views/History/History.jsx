import React from "react";
import { Layout } from "../../components/Layout";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { TbSwimming } from "react-icons/tb";
import { FaBicycle } from "react-icons/fa6";
import { VscChevronRight } from "react-icons/vsc";

function History() {
  return (
    <Layout>
      {/* Choose history type */}
      <div
        className=" bg-slate-400  text-slate-100 flex justify-between mt-24 rounded-lg m-5    
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

      {/* Card */}
      <div className=" glass mt-5  text-white rounded-lg m-5 p-1 lg:p-5 flex justify-between drop-shadow-md">
        {/* icon */}
        <div className=" m-5 flex justify-center hidden lg:block lg:justify-center flex-col border-solid">
          <FaRunning className="text-slate-900 text-20 lg:text-5xl " />
        </div>

        {/* Card image */}
        <div className="flex justify-center flex-col ">
          <img
            src="https://i.pinimg.com/564x/51/83/33/5183331b94eb09c31eaf59bc0ac60797.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 lg:w-72 border border-red-500 w-40 ml-2">
          <p className="text-sm">Description</p>
          <p className="font-bold lg:text-2xl">
            "Happiness is running with friends."
          </p>
        </div>
        {/* History Infomation */}
        <div className=" text-slate-700  flex lg:gap-20 lg:gap-10 gap-5">
          <div className="">
            <div className=" h-20 w-30">
              <p className="text-sm">Date </p>
              <p className="font-bold lg:text-2xl">08/09/2023</p>
            </div>
            <div className="h-20 mt-3">
              <p className="text-sm">Distance</p>
              <p className="font-bold lg:text-2xl">3.12 km</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className=" h-20 w-30">
              <p className="text-sm">Average Pace</p>
              <p className="font-bold lg:text-2xl">8.21 /km</p>
            </div>
            <div className="h-20 mt-3">
              <p className="text-sm">Duration</p>
              <p className="font-bold lg:text-2xl">32.04 min</p>
            </div>
          </div>
        </div>
        {/* Delete and Edit Button */}
        <div className="text-2xl ml-5">
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
