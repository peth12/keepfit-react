import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineSportsKabaddi } from "react-icons/md";


const AddWorkout = () => {
    return (
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary text-white"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Add
          <FiPlusCircle />
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
                ✕
              </button>
            </form>
            <p className="font-bold py-4 text-xl flex items-center gap-2">
              Workout info <MdOutlineSportsKabaddi />
            </p>
  
            {/* Workout photo*/}
  
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
  
            {/*Container of Input ทั้งหมด */}
            <div>
              <div className="">
                <label
                  className="block text-sm font-semibold text-gray-600 mb-1 "
                  htmlFor="inputWorkoutName"
                >
                  Workout Name
                </label>
  
                <input
                  className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
                  id="inputWorkoutName"
                  type="text"
                  placeholder="Enter your Workout name"
                />
              </div>
  
              <div className="">
                <label
                  className="block text-sm font-semibold text-gray-600 mb-1 "
                  htmlFor="inputDescription"
                >
                  Description
                </label>
  
                <input
                  className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:border-primary"
                  id="inputDescription"
                  type="text"
                  placeholder="Enter your Description"
                />
              </div>
  
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-primary text-white">Save</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </>

    )
}

export default AddWorkout