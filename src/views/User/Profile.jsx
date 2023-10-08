import { React, useState } from "react";
import { Layout } from "../../components/Layout";
import {FaUserAstronaut} from 'react-icons/fa'
import "./User.css";

const Profile = () => {

  return (
    <Layout>
      <div className="xl:container xl:mx-auto">
      <div className="px-4 mt-28">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-xl shadow-lg">
            {/* Profile picture card */}
            <div className="bg-white rounded-lg shadow-md p-4 pb-10">
              <div className="text-xl font-black flex">
              <strong className=" bg-primary rounded-full text-white px-10 p-2 flex gap-x-5">My Profile <FaUserAstronaut/> </strong>
              
              </div>
              <div className="text-center mt-4">
                {/* Profile picture image */}
                <img
                  className="w-48 h-48 mx-auto rounded-full mb-2 border-primary border-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4z74_LFWLdVmNvCDM0egcILVCWwp0kfEYw&usqp=CAU"
                  alt=""
                />
                {/* Profile picture help block */}
                <div className="text-xs text-gray-500 my-10 ">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* Profile picture upload button */}
                <label className="bg-primary hover:bg-primary-focus duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer ">
                  <input type="file" className="hidden " /> Upload new image
                </label>
              </div>

            </div>
          </div>
          <div className="col-span-2 mb-10 rounded-xl shadow-lg">
            {/* Account details card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              
              {/* <div className="text-lg font-black">
              <strong className=" bg-primary rounded-full text-white px-10 p-2 ">Account Details</strong>
              </div>
               */}

              {/* Form */}
              <form className="mt-4">
                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Form Group (first name) */}
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-600"
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
                  {/* Form Group (last name) */}
                  <div>
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
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Form Group (weight) */}
                  <div>
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
                  {/* Form Group (height) */}
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-600"
                      htmlFor="inputHeight"
                    >
                      Height (cm)
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                      id="inputHeight"
                      type="number"
                      min="0"
                      placeholder="Enter your Height"
                    />
                  </div>
                </div>
                {/* Form Group (email address) */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold text-gray-600"
                    htmlFor="inputEmailAddress"
                  >
                    Email address
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Form Group (gender) */}
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-600"
                      htmlFor="inputGender"
                    >
                      Gender
                    </label>

                    <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary">
                      <option disabled selected>
                        None
                      </option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Not specified</option>
                    </select>
                  </div>
                  {/* Form Group (birthday) */}
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
                </div>
                {/* Save changes button */}
                <button className="btn btn-primary text-white font-semibold py-2 px-4 rounded">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Profile;
