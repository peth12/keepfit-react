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
import { GoAlertFill } from "react-icons/go";

function History() {
  return (
    <Layout>
      {/* Choose history type */}
      <div
        className="hidden bg-primary  text-slate-100 flex justify-between mt-24 rounded-lg m-5 lg:flex   
      "
      >
        <a className="btn btn-ghost normal-case lg:text-xl">All</a>
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
              <a>All</a>
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
        <div className="text-slate-700 lg:w-72  w-100 lg:ml-2 ps-5">
          <div className="">
            <p className="text-sm ">Activity Name</p>
            <p className=" lg:text-2xl font-bold ">Running</p>

            <p className="text-sm mt-3">Description</p>
            <p className=" lg:text-2xl font-bold ">
              "Happiness is running with friends.
            </p>
          </div>
        </div>
        {/* History Infomation */}
        <div className=" text-slate-700  lg:gap-20 lg:gap-10 gap-5 flex flex-row  ps-5 mt-2">
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
        {/* Edit */}
        <div className="text-2xl ml-5 text-end">
          <button
            className=" text-white"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <a href="#" className="tooltip " data-tip="Edit">
              <TbPencil className="text-slate-900" />
            </a>
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600">
                  ✕
                </button>
              </form>

              {/* Edit profile photo */}
              <div className="flex justify-center py-8">
                <img
                  className="w-[200px] h-[200px] object-cover rounded-full border-4 border-primary"
                  src="https://i.pinimg.com/564x/aa/b1/66/aab1668efa22babd2f1e883fd859846c.jpg"
                  alt=""
                />

                {/* รูปไว้กด Edit */}
                <div className="w-[200px] h-[200px] group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                  <img
                    type="file"
                    className="hidden group-hover:block w-12"
                    src="https://www.svgrepo.com/show/33565/upload.svg"
                    alt=""
                  />

                  {/* ปุ่มไว้กด Upload photo */}

                  <input type="file"></input>
                </div>
              </div>

              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Activity Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Activity Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Date
                  </span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full text-gray-400"
                />
              </div>
              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Distance (Kg)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Distance"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Activity Type
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=" Activity Type"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full pt-3">
                <label className="label">
                  <span className="label-text text-primary font-semibold text-[16px]">
                    Dutation (Min)
                  </span>
                </label>
                <select className="select select-bordered text-gray-400">
                  <option disabled selected>
                    Duration
                  </option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                </select>
              </div>

              <div className="modal-action w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary text-white w-80 lg:w-16">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <button
            className=""
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <a href="#" className="tooltip " data-tip="Delete">
              <TbTrash className="text-slate-900" />
            </a>
          </button>
          <dialog
            id="my_modal_1"
            className="modal text-black text-base text-start"
          >
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center text-red ">
                Delete Activity
                <p className="text-center text-red-600 flex justify-center text-5xl">
                  <GoAlertFill />
                </p>
              </h3>

              <img src="./assets/trash_ja.png" alt="" />
              <p className="py-4 text-center">
                Deleting this activity will permanently remove it from your
                workout record. Are you sure you want to delete this activity?
              </p>
              <div className="modal-action">
                <div className="text-center">
                  <form method="dialog ">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-green-500 text-white  w-72 lg:w-32">
                      Cancel
                    </button>
                    <button className="btn bg-red-600 text-white  w-72 lg:w-32 ">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>

          {/* <a href="#" className="tooltip  tooltip-primary" data-tip="Edit">
            <TbPencil className="text-slate-900" />
          </a> */}

          {/* <a href="#" className="tooltip " data-tip="Delete">
            <TbTrash className="text-slate-900" />
          </a> */}
        </div>
      </div>
    </Layout>
  );
}

export default History;
