import React,{useState} from "react";
import { BiEditAlt } from "react-icons/bi";
import {FiSave} from "react-icons/fi"

const EditActivity = (props) => {
  const {userById} = props
  
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="px-3 text-sm font-medium text-center inline-flex items-center rounded-lg gap-1 bg-blue-500 hover:bg-blue-600 text-white h-full"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Edit
        <BiEditAlt />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
              ✕
            </button>
          </form>
          <p className="font-bold py-4 text-xl flex items-center gap-2">Activity info <FiSave/></p>

          {/* Activity photo*/}

          <div className="flex justify-center py-8">
                  <img
                    className="w-[200px] h-[200px] object-cover rounded-full border-4 border-primary"
                    src={userById.ActivityImage}
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

          {/*Container of Details ทั้งหมด */}
          <div>
            <p className="block text-sm font-semibold text-gray-600 mb-1">Activity Owner</p>
            <p className="block text-sm mb-6 ps-3">{userById.UserEmail}</p>

            {/* Input */}
            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600 mb-1 "
                htmlFor="inputActivityName"
              >
                Activity name
              </label>

              

              <input
                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
                id="inputActivityName"
                type="text"
                value={userById.ActivityName}
                placeholder="Enter your Activity name"
              />
            </div>

            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600 mb-1"
                htmlFor="inputDescription"
              >
                Description
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
                id="inputDescription"
                type="text"
                value={userById.ActivityDesc}
                placeholder="Enter your description"
              />
            </div>
          
            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600 mb-1"
                htmlFor="inputDate"
              >
                Date
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
                id="inputDate"
                type="date"
                value={userById.ActivityDate}
                placeholder="Enter date"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-600 mb-1"
                htmlFor="inputDuration"
              >
                Duration
              </label>

              <select
                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
              >
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

            <div>
              <label
                className="block text-sm font-semibold text-gray-600 mb-1"
                htmlFor="inputWorkoutType"
              >
                Workout Type
              </label>

              <select
                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
              >
                <option disabled selected>
                  Workout Type
                </option>
                <option>Boxing</option>
                <option>Cycling</option>
                <option>Running</option>
                <option>Swimming</option>
                <option>Yoga</option>
              </select>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-primary text-white">Save</button>
            </form>
          </div>

          
        </div>
      </dialog>
    </>
  );
};

export default EditActivity;
