import React from "react";
import { BiEditAlt } from "react-icons/bi";

const EditUser = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl mb-8">Padtaraya Chudchawinpond</h3>
          <p className="font-semibold py-4 text-lg">Profile info</p>

          {/* User profile pic */}
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

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600 "
                htmlFor="inputFirstName"
              >
                First name
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                id="inputFirstName"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600"
                htmlFor="inputLastName"
              >
                Last name
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                id="inputLastName"
                type="text"
                placeholder="Enter your lastname"
              />
            </div>
          </div>

          {/* Second Row */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600"
                htmlFor="inputWeight"
              >
                Weight (kg)
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                id="inputWeight"
                type="number"
                min="0"
                placeholder="Enter your weight"
              />
            </div>

            <div className="">
              <label
                className="block text-sm font-semibold text-gray-600 "
                htmlFor="inputHeight"
              >
                Height (cm)
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                id="inputHeight"
                type="number"
                min="0"
                placeholder="Enter your height"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-semibold text-gray-600"
                htmlFor="inputBirthday"
              >
                Birthday
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                id="inputBirthday"
                type="date"
                name="birthday"
                placeholder="Enter your birthday"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-gray-600"
                htmlFor="inputGender"
              >
                Gender
              </label>

              <select
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                >
                <option disabled selected>
                  None
                </option>
                <option>Female</option>
                <option>Male</option>
                <option>Not specified</option>
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

export default EditUser;
