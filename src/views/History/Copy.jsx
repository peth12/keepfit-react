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
      <div className=" glass mt-5  text-white rounded-lg m-5 lg:p-5 flex justify-between drop-shadow-md">
        {/* icon */}
        <div className=" m-5 flex justify-start lg:justify-center flex-col border-solid">
          <FaRunning className="text-slate-900 text-20" />
        </div>
        {/* size={20} */}
        {/* Card image */}
        <div className="flex justify-center flex-col ">
          <img
            src="https://i.pinimg.com/564x/51/83/33/5183331b94eb09c31eaf59bc0ac60797.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 lg:w-72">
          <p>Description</p>
          <p className="font-bold lg:text-2xl">
            "Happiness is running with friends."
          </p>
        </div>
        {/* History Infomation */}
        <div className=" text-slate-700  flex lg:gap-20 lg:gap-10">
          <div>
            <p>Date </p>
            <p className="font-bold lg:text-2xl">08/09/2023</p>

            <br></br>

            <p>Distance</p>
            <p className="font-bold lg:text-2xl">3.12 km</p>
          </div>

          <div>
            <p>Average Pace</p>
            <p className="font-bold lg:text-2xl">8.21 /km</p>
            <br></br>
            <p>Duration</p>
            <p className="font-bold lg:text-2xl">32.04 min</p>
          </div>
        </div>
        {/* Delete and Edit Button */}
        <div className="text-2xl ">
          <a href="#" className="tooltip  tooltip-primary" data-tip="Edit">
            <TbPencil className="text-slate-900" />
          </a>

          <a href="#" className="tooltip " data-tip="Delete">
            <TbTrash className="text-slate-900" />
          </a>
        </div>
      </div>

      {/* Card */}
      <div className=" glass mt-5   text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
        <div className=" m-5 flex justify-center flex-col">
          <TbSwimming className="text-slate-900 " size={50} />
        </div>

        {/* Card image */}
        <div className="flex justify-center flex-col ">
          <img
            src="https://i.pinimg.com/564x/09/42/88/094288c8b1b75123964637541f87220c.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 w-72">
          <p>Description</p>
          <p className="font-bold text-2xl">
            "More swimming, fewer worries 🐳"
          </p>
        </div>

        {/* History Infomation */}
        <div className=" text-slate-700  flex gap-20 sm:gap-10">
          <div>
            <p>Date </p>
            <p className="font-bold text-2xl">10/09/2023</p>

            <br></br>

            <p>Distance</p>
            <p className="font-bold text-2xl">2.7 km</p>
          </div>

          <div>
            <p>Average Pace</p>
            <p className="font-bold text-2xl">8.1 /km</p>
            <br></br>
            <p>Duration</p>
            <p className="font-bold text-2xl">1 hr 36 min</p>
          </div>
        </div>

        {/* Delete and Edit Button */}
        <div className="text-2xl ">
          <a href="#" className="tooltip  tooltip-primary" data-tip="Edit">
            <TbPencil className="text-slate-900" />
          </a>

          <a href="#" className="tooltip " data-tip="Delete">
            <TbTrash className="text-slate-900" />
          </a>
        </div>
      </div>

      {/* Card */}
      <div className=" glass mt-5   text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
        <div className=" m-5 flex justify-center flex-col">
          <FaBicycle className="text-slate-900 " size={50} />
        </div>

        {/* Card image */}
        <div className="flex justify-center flex-col ">
          <img
            src="https://i.pinimg.com/564x/4a/99/b8/4a99b8c60abcbe212af797df137e2900.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 w-72">
          <p>Description</p>
          <p className="font-bold text-2xl">
            "I ride to escape. I ride to find peace. I ride to feel free."
          </p>
        </div>

        {/* History Infomation */}
        <div className=" text-slate-700  flex gap-20 sm:gap-10">
          <div>
            <p>Date </p>
            <p className="font-bold text-2xl">10/09/2023</p>

            <br></br>

            <p>Distance</p>
            <p className="font-bold text-2xl">3.5 km</p>
          </div>

          <div>
            <p>Average Pace</p>
            <p className="font-bold text-2xl">4.1 /km</p>
            <br></br>
            <p>Duration</p>
            <p className="font-bold text-2xl">1 hr 36 min</p>
          </div>
        </div>

        {/* Delete and Edit Button */}
        <div className="text-2xl ">
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