import React from "react";
import { Layout } from "../../components/Layout";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { TbSwimming } from "react-icons/tb";
import { FaBicycle } from "react-icons/fa6";

function History() {
  return (
    <Layout >
      {/* previos code */}
      {/* Choose history type */}
      {/* <div className="bg-amber-500 mt-5 flex  text-white rounded-full m-5 ">
        <ul className="menu menu-horizontal px-1 text-xl font-bold text-white gap-10 pl-10">
          <li>
            <a href="">All </a>
          </li>
          <li>
            <a>Run</a>
          </li>
          <li>
            <a>Swim</a>
          </li>
          <li>
            <a>Walk</a>
          </li>
          <li>
            <a>Bicycle</a>
          </li>
        </ul>
      </div> */}

      {/* Choose history type */}
      <div
        className=" bg-slate-500  text-slate-200 flex justify-between mt-24 rounded-lg m-5   
      "
      >
        <a className="btn btn-ghost normal-case text-xl ">All</a>
        <a className="btn btn-ghost normal-case text-xl">Run</a>
        <a className="btn btn-ghost normal-case text-xl">Swim</a>
        <a className="btn btn-ghost normal-case text-xl">Walk</a>
        <a className="btn btn-ghost normal-case text-xl">Bicycle</a>
      </div>

      {/* Card */}
      <div className=" glass mt-5 bg-slate-200  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
        <div className=" m-5 flex justify-center flex-col">
          <FaRunning className="text-slate-900 " size={50} />
        </div>

        {/* Card image */}
        <div className="flex justify-center flex-col ">
          <img
            src="https://i.pinimg.com/564x/03/fa/5c/03fa5cfe676edfa41f6cfd41c408056a.jpg"
            alt=""
            className="h-40  drop-shadow-md rounded-lg w-40 "
          />
        </div>
        {/* Description */}
        <div className="text-slate-700 w-72">
          <p>Description</p>
          <p className="font-bold text-2xl">"Happiness is running with friends."</p>
        </div>

        {/* History Infomation */}
        <div className=" text-slate-700  flex gap-20 sm:gap-10">
          <div>
            <p>Date </p>
            <p className="font-bold text-2xl">08/09/2023</p>

            <br></br>

            <p>Distance</p>
            <p className="font-bold text-2xl">3.12 km</p>
          </div>

          <div>
            <p>Average Pace</p>
            <p className="font-bold text-2xl">8.21 /km</p>
            <br></br>
            <p>Duration</p>
            <p className="font-bold text-2xl">32.04 min</p>
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
      <div className=" glass mt-5 bg-slate-200  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
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
          <p className="font-bold text-2xl">"More swimming, fewer worries 🐳"</p>
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
      <div className=" glass mt-5 bg-slate-200  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
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
          <p className="font-bold text-2xl">"I ride to escape. I ride to find peace. I ride to feel free."</p>
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
